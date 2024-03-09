let db;

module.exports = class DB {
    static setDB(newDB) {
        db = newDB;
    }

    static async saveComment(userData) {
        const { name, avatar, text } = userData;

        return new Promise((resolve, reject) =>
            db.run(
                `INSERT INTO comments (name, avatar, text) VALUES (?, ?, ?)`,
                [name, avatar, text],
                (err) => (err ? reject(err) : resolve("Комментарий сохранён"))
            )
        );
    }

    static async getAllComments() {
        return new Promise((resolve, reject) =>
            db.all("SELECT * FROM comments", (err, row) =>
                err ? reject(err) : !row ? resolve(null) : resolve([...row])
            )
        );
    }
};
