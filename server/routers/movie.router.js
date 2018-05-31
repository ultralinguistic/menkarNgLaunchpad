const express = require('express');
const router = express.Router();
let movieId =2;
const movieArray = [{
    title: 'Star Wars',
    id: 1,

}];

router.get('/', (req, res) => {
    console.log('In /movie GET');
    res.send(movieArray);
});

router.post('/', (req, res) => {
    let movie = req.body;
    console.log('In /movie POST with data,', movie);
    movie.id = movieId++;
    movieArray.push(movie);
    res.sendStatus(200);
});

router.delete('/', (req, res) => {
    console.log('In /movie DELETE');
    let id = req.query.id;
    for (let i=0; i<movieArray.length; i++) {
        let movie = movieArray[i];
        if (id == movie.id) {
            movieArray.splice(i, 1);
        }
    }
    res.sendStatus(201);
});

module.exports = router;