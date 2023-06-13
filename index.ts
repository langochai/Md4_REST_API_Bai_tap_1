import express from "express";
import bodyParser from 'body-parser';
import apiRouter from "./src/router/api.router";
const PORT = 8000;

const app = express();
app.use(bodyParser.json());
app.use('/api', apiRouter)
app.listen(PORT, () => {
    console.log("App running with port: " + PORT)
})
