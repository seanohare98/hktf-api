const athletes = require('./athletesLogic');
const express = require('express');
const bodyParser = require('body-parser');
const {validate_fields} = require('../commonFunctions');
const router = express.Router();
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

//get_name
router.get('/:name', async function (req, res) {
    let name = req.params.name;
    name = name.toUpperCase();

    try {
        let data = await athletes.get_name(name);
        res.status(200).header('Content-Type', 'application/json').send(data);
    } catch (err) {
        res.status(400).send({"Unexpected Error": err});
    }
});

module.exports = router;
