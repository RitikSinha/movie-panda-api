const express = require('express');
const router = express.Router();

const {createMovie,
    getMovies,
    updateMovie,
    deleteMovie,
    findMovieById, 
    getOneMovie} = require('../controllers/movieController');


router.param("movieID",findMovieById);

//create movie
router.post("/movie",createMovie);

//read movie 

router.get("/movies",getMovies);
router.get('/movie/:movieID',getOneMovie);


//delete movie 
router.delete("/movie/:movieID",deleteMovie);

//update movie
router.put("/movie/:movieID",updateMovie);


module.exports = router;