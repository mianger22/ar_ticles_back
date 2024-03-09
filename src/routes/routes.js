import cors from "cors";
import bodyParser from "body-parser";
import { get_comments, save_comment } from "../controllers/users.controllers.js";

export default function routes(app) {
    // настраиваем АПИ, чтобы не приходила ошибка CORS
    // app.use(cors({ origin: true, credentials: true }));
    app.use(cors({ origin: '*', credentials: true, optionSuccessStatus: 200 }));
    app.use(bodyParser.json());
    app.use(
        bodyParser.urlencoded({
            extended: true,
        })
    );

    app.get("/comments", get_comments);
    app.post("/comments", save_comment);
};