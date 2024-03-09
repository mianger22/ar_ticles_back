let db;

module.exports = class DB {
    static setDB(newDB) {
        db = newDB;
    }

    static async getAllComments() {
        return new Promise((resolve, reject) =>
            db.all("SELECT * FROM comments", (err, row) =>
                err ? reject(err) : !row ? resolve(null) : resolve([...row])
            )
        );
    }
};