const mongoose = require('mongoose');
const Schema = mongoose.Schema; // not the same as graphql schema, this refers to the data collection in mongoDb


const authorSchema = new Schema({
    // no need id because mongoDB automatically generates id
    name: String,
    age: Number
});

module.exports = mongoose.model('Author', authorSchema);