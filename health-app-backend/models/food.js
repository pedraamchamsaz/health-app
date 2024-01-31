const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
    food: String,
    date: String,
    calories: Number

})

module.exports.Food = mongoose.model('Food', foodSchema)