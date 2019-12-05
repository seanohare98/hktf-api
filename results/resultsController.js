const results = require('./resultsLogic');
const express = require('express');
const bodyParser = require('body-parser');
const {validate_fields} = require('../commonFunctions');
const router = express.Router();
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

//get_year
router.get('/:year', async function (req, res) {
    let year = req.params.year;
    let {event = '*', top = 'all'} = req.query;
    event = event.toLowerCase();
    top = top.toLowerCase();
    event = event.split(',');

    if (!(event.every(validate_fields) === true) || !(top ==='all' || top === '5' || top === '10' || top ==='25'))
        return res.status(400).send({"Error": 'Please choose supported event(s) or top'});

    try {
        let data = await results.get_year(year, event, top);
        res.status(200).header('Content-Type', 'application/json').send(data);
    } catch (err) {
        res.status(400).send({"Unexpected Error": err});
    }
});

module.exports = router;
