const {Schema, model,Types} = require('mongoose')

const schema = new Schema({
  state:{type:String},
  name: {type:String},
  mark: {type:String},
  contact: {type:String},
  officehours:{type:String}
})

module.exports = model('Subject', schema)
