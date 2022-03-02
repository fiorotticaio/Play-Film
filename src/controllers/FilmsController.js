const Database = require('../db/config');

module.exports = {

    async opne(req, res) {
        const db = await Database();
        const filmName = req.params.filmName;
        const film = await db.all(`SELECT * FROM films WHERE name = ${filmName}`);
    
        res.render('index', {filmName: filmName, film: film});
    },

    enter(req, res) {
        const film = req.body.filmName;
        res.redirect(`/images/${film}`);
    }
};