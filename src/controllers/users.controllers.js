const functionsDatabase = require("../utils/functionsDatabase");
const routingFunction = require("../utils/routingFunction");
const DB = require("./DB");

const saveComment = async (req, res) => {
    try {
        await (function () {
            // собираем вместе отправленные данные
            let commentData = {
                name: req.body.name,
                avatar: req.body.avatar,
                text: req.body.text,
            };

            // сохраняем их
            functionsDatabase.connectDB(
                DB.saveComment,
                commentData,
                functionForInteractingWithTheDatabase
            );

            // отправляем ответ пользователю
            function functionForInteractingWithTheDatabase(resultat) {
                if (resultat !== null) {
                    res.send(`${resultat}`);
                }
            }
        })();
    } catch (e) {
        res.status(500).json({
            message: "Увы, ошибка сохранения: " + e.message,
        });
    }
};

const getAllComments = routingFunction(DB.getAllComments);

module.exports = {
    getAllComments,
    saveComment
};
