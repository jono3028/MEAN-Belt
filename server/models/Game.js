var mongoose = require('mongoose')

var gameSchema = new mongoose.Schema({
  name: {type: String},
  score: {type: Number},
  percent: {type: Number}
}, {timestamps: true})

mongoose.model('Game', gameSchema)
