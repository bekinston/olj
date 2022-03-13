const {Schema, model,Types} = require('mongoose')

const schema = new Schema({
  name: {type:String},
  date: {type:String},
  place: {type:String},
  type: {type:String},
  state: {type:String}
})

module.exports = model('Event', schema)
