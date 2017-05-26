var mongoose = require('mongoose')

var questionSchema = new mongoose.Schema({
  question: {type: String},
  answer: {type: String},
  fake1: {type: String},
  fake2: {type: String}
}, {timestamps: true})

mongoose.model('Question', questionSchema)