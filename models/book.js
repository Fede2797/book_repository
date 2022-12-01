const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        unique: true
    },
    author: {
        type: String,
        required: [true, 'Author is required']
    },
    release_year: {
        type: String,
        required: [true, 'Year of release is required']
    }
  });

module.exports = model( 'Book', bookSchema, 'Books' );