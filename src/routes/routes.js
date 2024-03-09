const cors = require("cors");
const bodyParser = require("body-parser");
const { getAllComments, saveComment } = require("../controllers/users.controllers");

module.exports = (app) => {
    app.use(cors({ origin: '*', credentials: true, optionSuccessStatus: 200 }));
    app.use(bodyParser.json());
    app.use(
        bodyParser.urlencoded({
            extended: true,
        })
    );

    app.get("/getAllComments", getAllComments);
    app.post("/saveComment", saveComment);
};
