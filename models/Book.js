const { model, Schema } = require('mongoose')

const Book = new Schema({
  title: String,
  authors: String,
  image: String,
  description: String,
  link: String
})

module.exports =  model('Book', Book)