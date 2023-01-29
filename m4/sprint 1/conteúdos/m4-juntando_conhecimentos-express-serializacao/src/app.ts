import express, { Application, json } from "express";
import { createClient } from "./logic";

const app: Application = express();
app.use(json());

app.post("/clients", createClient);

const PORT: number = 3000;
const runningMsg: string = `Server running on http://localhost${PORT}`;
app.listen(PORT, () => console.log(runningMsg));
