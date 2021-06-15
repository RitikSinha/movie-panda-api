const Movie = require("../models/movie");


//middleware
exports.findMovieById = (req,res,next,id)=>{
    Movie.findById(id).exec((err,mov)=>{
        if(err){
            return res.status(400).json({
                err : "Movie not found"
            });
        }
        req.movie = mov;
        next();

    })
}

//create movie

exports.createMovie = (req,res)=>{
    let movie = new Movie(req.body);
    movie.save((err,mov)=>{
        if(err){
            return res.status(400).json({
                err:" failed to save in db"
            });
        }
        return res.status(200).json({
            msg: `Added  ${mov.name} to database`
        });
    })
}

//read movie

exports.getMovies = (req,res)=>{
    Movie.find({}).exec((err,mov)=>{
        if(err){
            return res.status(400).json({
                err : "No Movies found"
            });
        }
        return res.json(mov);
    })
}
exports.getOneMovie = (req,res)=>{
    Movie.findById(req.movie_id).exec((err,mov)=>{
        if(err){
            return res.status(400).json({
                err : "Movie not found"
            });
        }
        return res.json(mov);

    })
}

//update movie
exports.updateMovie = (req,res)=>{
    Movie.findByIdAndUpdate({
        _id: req.movie._id
    },{$set: req.body },
    {new: true, useFindAndModify:false},).exec((err,mov)=>{
        if(err){
            return res.status(400).json({
                err:"could not update"
            })
        }
        return res.json(mov);
    })
}

//delete movie

exports.deleteMovie = (req,res)=>{
    Movie.findOneAndDelete(
        {_id:req.movie._id}
    ).exec((err,mov)=>{
        if(err){
            return res.status(400).json({
                err: "Movie not deleted"
            });
            
        }
        return res.json({msg:"sucessfuly deleted"});
    })
}