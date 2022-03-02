const Database = require("./config");

const initDb = {
    async init(){
        const db = await Database()

        await db.exec(`CREATE TABLE films (
            id INTEGER PRIMARY KEY,
            name TEXT
        )`);

        await db.close()
    }
}

initDb.init();