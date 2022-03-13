const {Schema, model,Types} = require('mongoose')

const schema = new Schema({
  name: {type:String},
  date: {type:String},
  photo:{type:String, required:true},
  desc:{type:String},
  state:{type:String}

})

module.exports = model('Text', schema)
