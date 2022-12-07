var express = require('express');
var got = require('got');
var router = express.Router();

/* GET people listing. */
router.get('/', function(req, res, next) {
    getPeople().then(people => {
        console.log(people)
        res.json(people)
    })
});

async function getPeople() {
    const url = "https://swapi.dev/api/people/";
    const data = await got(url).json();
    return data;
}

module.exports = router;
