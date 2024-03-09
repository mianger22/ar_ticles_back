import functionsDatabase from "../utils/functionsDatabase";
import routingFunction from "../utils/routingFunction";
import DB from "./DB";

const save_comment = async (req, res) => {
    try {
        await (function () {
            // собираем вместе отправленные данные
            let comment_data = {
                user_name: req.body.user_name,
                comment: req.body.comment,
                date_creation: req.body.date_creation
            };

            // сохраняем их
            functionsDatabase.connectDB(
                DB.save_comment,
                comment_data,
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
            message: `Ошибка сохранения: ${e.message}`,
        });
    }
};

const get_comments = routingFunction(DB.get_comments);

export default {
    get_comments,
    save_comment
};
