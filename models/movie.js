const mongoose = require('mongoose');

//movie schema 
const movieSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        maxlength: 55,
        required: true,
    },
    year:{
        type: Date,
        required: true,
        trim: true
    },
    language:{
        type:String,
        trim: true,
        maxlength:55,
        required: true
    },
    img:{
        type:String,
        trim:true,
    },
    vid:{
        type:String,
        trim:true
    }

},{timestamps:true});

module.exports = mongoose.model("Movie",movieSchema);