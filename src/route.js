const express = require('express');
const FilmsController = require('./controllers/FilmsController');

const route = express.Router();

route.get('/', (req, res) => res.render("index"));

// route.get('/:filmName', FilmsController.open);

module.exports = route;