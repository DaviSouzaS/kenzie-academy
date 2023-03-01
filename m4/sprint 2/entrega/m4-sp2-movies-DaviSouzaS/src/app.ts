import express, { Application } from "express";
import { startDataBase } from "./database";
import { createMovies, listMovies, updateMovies, deleteMovie } from "./functions";
import { allMovies } from "./middlewares";

const app: Application = express()
app.use(express.json())

app.post('/movies', allMovies, createMovies)

app.get('/movies', allMovies, listMovies)

app.patch('/movies/:id', allMovies, updateMovies)

app.delete('/movies/:id', allMovies, deleteMovie)

app.listen(3000, async () => {
    await startDataBase()
    console.log("Server is running!")
}) 
