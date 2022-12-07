var express = require('express');
var got = require('got');
var router = express.Router();

/* GET people listing. */
router.get('/', function(req, res, next) {
    getNFirstFemaleCharacters(5)
        .then(people => {
            res.json(people)
        })
        .catch(err => {
            res.json({error: "Something went wrong"})
        })
});

async function getPeople(url) {
    url = url ?? "https://swapi.dev/api/people/";
    const data = await got(url).json();
    return data;
}

async function getNFirstFemaleCharacters(count) {
    const url = "https://swapi.dev/api/people/?page=";
    let people = [];
    for (let pageNumber=1; ;pageNumber++) {
        let data = await getPeople(url + pageNumber);
        for (let peep of data.results) {
            if (people.length < 5) {
                if (peep.gender === 'female') {
                    people.push(peep);
                }
            }
            else {
                return people;
            }
        }
    }
    return people;
}

module.exports = router;
