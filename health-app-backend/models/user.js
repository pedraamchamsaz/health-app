const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  token: String,
  weight: Number,
  height: Number,
  gender: String,
  goal: String,
  name: String,
  age: Number
});

module.exports.User = mongoose.model('User', userSchema)