var mongoose = require('mongoose')

var dbSchema = new mongoose.Schema({
  name: {type: String}
}, {timestamps: true})

mongoose.model('dbModel', dbSchema)

