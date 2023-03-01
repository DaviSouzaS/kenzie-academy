import { QueryResult } from "pg"

interface iMoviesRequest {
    name: string
    description?: string | null | undefined
    duration: number
    price: number
}

interface iMoviesUpdate {
    name?: string
    description?: string | null | undefined
    duration?: number
    price?: number
}

interface iMovies extends iMoviesRequest {
    id: number
}

type MoviesResult = QueryResult<iMovies>

export { iMoviesRequest, iMovies, MoviesResult, iMoviesUpdate }