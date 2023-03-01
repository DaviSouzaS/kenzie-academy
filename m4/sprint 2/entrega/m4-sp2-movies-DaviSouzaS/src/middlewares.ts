import { Request, Response, NextFunction } from "express";
import { MoviesResult } from "./interfaces";
import { client } from "./database";


const allMovies = async (request: Request, response: Response, next: NextFunction): Promise<Response | void>  => {

    const query: string = `
    SELECT
        *
    FROM
        movies;
    `

    const queryResult: MoviesResult = await client.query(query)

    const moviesList = queryResult.rows

    request.moviesResult = {
        moviesList: moviesList
    }

    return next()
}

export { allMovies }