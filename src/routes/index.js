
const express = require('express');
const router = express.Router();
const controller = require('../controllers/crawlerController')

router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "smartmeichallenge API",
        version: "0.0.1"
    });
});

router.post('/crawler', controller.crawlar);

module.exports = router;
