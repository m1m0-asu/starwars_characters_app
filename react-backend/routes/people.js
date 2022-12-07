var express = require('express');
var router = express.Router();

/* GET people listing. */
router.get('/', function(req, res, next) {
    let people;
    fetch('https://swapi.dev/api/people/')
        .then(res => people = res);
    res.json(people);
});

module.exports = router;
