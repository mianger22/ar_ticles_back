import express from "express";
import http from "http";
// import routes from "./routes/routes.js";

const app = express();
const httpServ = http.Server(app);
const port = 5000;

httpServ.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`Cервер запущен на порту ${port}`);
});

// routes(app);