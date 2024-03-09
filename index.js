import express from "express";
import http from "http";
import routes from "./src/routes/routes";

const app = express();
const httpServ = http.Server(app);
const port = process.env.PORT || 80;

const server = httpServ.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`Cервер запущен на порту ${server.address().port}`);
});

routes(app);
