let db;

export default class DB {
    static setDB(newDB) {
        db = newDB;
    }

    static async save_comment(comment_data) {
        const { user_name, comment, date_creation } = comment_data;

        return new Promise((resolve, reject) =>
            db.run(
                `INSERT INTO comments (user_name, comment, date_creation) VALUES (?, ?, ?)`,
                [user_name, comment, date_creation],
                (err) => (err ? reject(err) : resolve("Комментарий добавлен в Базу Данных"))
            )
        );
    }

    static async get_comments() {
        return new Promise((resolve, reject) =>
            db.all("SELECT * FROM comments", (err, row) =>
                err ? reject(err) : !row ? resolve(null) : resolve([...row])
            )
        );
    }
};