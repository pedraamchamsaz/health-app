const mongoose = require('mongoose');

const exerciseSchema = mongoose.Schema({
    date: String, 
    exercise: String,
    duration: Number,
    calories: Number

})

module.exports.Exercise = mongoose.model('Exercise', exerciseSchema)