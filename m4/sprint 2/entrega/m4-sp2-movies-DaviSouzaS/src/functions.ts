import { Request, Response } from "express";
import { QueryConfig } from "pg";
import format from "pg-format";
import { client } from "./database";
import { MoviesResult, iMoviesRequest, iMovies, iMoviesUpdate } from "./interfaces";

const createMovies = async (request: Request, response: Response): Promise<Response> => {

    let moviesDataRequest: iMoviesRequest = request.body

    moviesDataRequest = {
        name: moviesDataRequest.name,
        description: moviesDataRequest.description,
        duration: moviesDataRequest.duration,
        price: moviesDataRequest.price
    }

    if (moviesDataRequest.name === undefined || moviesDataRequest.duration === undefined || moviesDataRequest.price === undefined) {
        return response.status(400).json({
            message: `List keys name, duration and price are required`
        })
    }

    if (typeof moviesDataRequest.name !== "string" || typeof moviesDataRequest.duration !== "number" || typeof moviesDataRequest.price !== "number" || typeof moviesDataRequest.description !== "string" && moviesDataRequest.description !== undefined) {
        return response.status(400).json({
            message: `List information must be a correct type`
        })
    }

    const movies = request.moviesResult.moviesList

    const checkingMoviesName = movies.every((item) => {
        return moviesDataRequest.name !== item.name
    })

    if (!checkingMoviesName) {
        return response.status(409).json({
            message: `Movie ${moviesDataRequest.name} already exists`
        })
    }
   
    const queryString: string = `
    INSERT INTO
        movies( name, description, duration, price )
    VALUES
        ( $1, $2, $3, $4 )
    RETURNING *;
    `

    const queryConfig: QueryConfig = {
        text: queryString,
        values: Object.values(moviesDataRequest) 
    }

    const queryResult: MoviesResult = await client.query(queryConfig)
    const newMovie: iMovies = queryResult.rows[0]

    return response.status(201).json(newMovie)
}

const listMovies = async (request: Request, response: Response): Promise<Response> => {

    let page = Number(request.query.page) || 1 

    let perPage = Number(request.query.perPage) || 5 

    const queryString: string = `
    SELECT
        *
    FROM
        movies
    OFFSET $1 LIMIT $2
    `

    if (page < 0 || perPage < 0 || typeof page !== "number" || typeof perPage !== "number" || perPage > 5) {
        page = 1
        perPage = 5
    }

    const lastPage = page - 1

    const queryConfig = {
        text: queryString,
        values: [perPage * (lastPage), perPage]
    }

    const baseUrl: String = `http://localhost:3000/movies`
    let previousPage: String | null = `${baseUrl}?page=${lastPage}&perPage=${perPage}`
    let nextPage: String | null = `${baseUrl}?page=${page + 1}&perPage=${perPage}`

    if (lastPage === 0) {
        previousPage = null
    }

    const queryResult: MoviesResult = await client.query(queryConfig)

    const moviesList = queryResult.rows
    let moviesPerPage = moviesList.length

    // if (moviesPerPage === 0) {
    //     previousPage = null
    // }

    const movies = request.moviesResult.moviesList

    if (moviesPerPage < 5 || page === movies.length / 5) {
        nextPage = null
    }

    // if (moviesList.length === 0) {
    //     return response.status(404).json({
    //         message: `This page is not exist`
    //     })
    // }

    const pagination = {
        previousPage,
        nextPage,
        count: moviesPerPage,
        data: moviesList
    }

    return response.status(200).json(pagination)
}

const updateMovies = async (request : Request, response : Response): Promise<Response> => {

    const updateColumns: string[] = Object.keys(request.body)
    const updateValues: string[] = Object.values(request.body)

    const id: number = Number(request.params.id)

    const movies = request.moviesResult.moviesList

    const checkingMoviesid = movies.every((item) => {
        return id !== item.id
    })

    if (checkingMoviesid) {
        return response.status(404).json({
            message: `Movie not found.`
        })
    }

    let moviesDataRequest: iMoviesRequest = request.body

    if (moviesDataRequest.name !== undefined) {

        const checkingMoviesName = movies.every((item) => {
            return moviesDataRequest.name !== item.name
        })

        if(!checkingMoviesName) {

            return response.status(409).json({
                message: `Movie ${moviesDataRequest.name} already exists`
            })
        }
    }

    const queryString: string = `
    UPDATE "movies"
    SET (%I) = ROW(%L)
    WHERE id = $1
    RETURNING *;
    `
    const queryFormat: string = format(
        queryString,
        updateColumns,
        updateValues
    )

    const queryConfig: QueryConfig = {
        text: queryFormat,
        values: [id]
    }

    const queryResult: MoviesResult = await client.query(queryConfig);

    const update: iMoviesUpdate = queryResult.rows[0]

    return response.status(201).json(update)
}

const deleteMovie = async (request: Request, response: Response) => {

    const id: number = Number(request.params.id)

    const movies = request.moviesResult.moviesList

    const checkingMoviesid = movies.every((item) => {
        return Number(request.params.id) !== item.id
    })

    if (checkingMoviesid) {
        return response.status(404).json({
            message: `Movie not found.`
        })
    }

    const queryString: string = `
    DELETE FROM
        movies
    WHERE
        id = $1;  
    `
    const queryConfig: QueryConfig = {
        text: queryString,
        values: [id]
    }

    await client.query(queryConfig)

    return response.status(204).send()
}

export { createMovies, listMovies, updateMovies, deleteMovie }