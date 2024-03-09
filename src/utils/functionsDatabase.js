const DB = require("../controllers/DB");
const sqlite3 = require("sqlite3");

module.exports = class functionsDatabase {
    static async connectDB(
        methodDB,
        parametres,
        functionForInteractingWithTheDatabase
    ) {
        let params =
            typeof parametres === "string" ? parametres : { ...parametres };

        // Общая функция подключения к БД
        sqlite3.verbose();

        async function workInDB() {
            new Promise((resolve, reject) => {
                let db = new sqlite3.Database("ar_ticles.db", (err) => {
                    if (err) reject(err);

                    resolve(
                        DB.setDB(db),
                        methodDB(params).then((resultat) => {
                            functionForInteractingWithTheDatabase(resultat);
                        })
                    );
                });
            });
        }

        return workInDB();
    }
};
