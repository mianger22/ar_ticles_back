let db;

export class DB {
    static setDB(newDB) {
        db = newDB;
    }

    static async save_comment_db_method(comment_data) {
        const { user_name, comment, date_creation, user_mail } = comment_data;

        return new Promise((resolve, reject) =>
            db.run(
                `INSERT INTO comments (user_name, comment, date_creation, user_mail) VALUES (?, ?, ?, ?)`,
                [user_name, comment, date_creation, user_mail],
                (err) => (err ? reject(err) : resolve("Комментарий добавлен в Базу Данных"))
            )
        );
    }

    static async get_comments_db_method() {
        return new Promise((resolve, reject) =>
            db.all("SELECT * FROM comments", (err, row) =>
                err ? reject(err) : !row ? resolve(null) : resolve([...row])
            )
        );
    }
};
