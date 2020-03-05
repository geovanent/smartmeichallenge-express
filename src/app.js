const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();

//Routes
const index = require('./routes/index');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', index);

module.exports = app;