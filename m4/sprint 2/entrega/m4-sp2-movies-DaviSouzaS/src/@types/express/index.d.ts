import * as express from "express"
import { iMovies } from "../../interfaces"

declare global {
    namespace Express {
        interface Request {
            moviesResult: {
                moviesList: Array<iMovies>
            }
        }
    }
}