const mongoose = require('mongoose');
const Schema = mongoose.Schema; // not the same as graphql schema, this refers to the data collection in mongoDb


const bookSchema = new Schema({
    // no need id because mongoDB automatically generates id
    name: String,
    genre: String,
    authorId: String
});

module.exports = mongoose.model('Book', bookSchema);