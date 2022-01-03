// nodemon app - Start the server
const express = require('express');
const {graphqlHTTP} = require('express-graphql'); 
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors'); // originally, graphiql doesn't accept requests from external services. CORS is a package that allows it.

// express app
const app = express();

// allow cross-origin requests
app.use(cors());

// connect to mongoDB
mongoose.connect('mongodb+srv://admin:admin@gql-cluster.m24fr.mongodb.net/gql-cluster?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.connection.once('open', () => {
  console.log("Successfully connected to MongoDB!");
});


// set up middleware
app.use('/graphql', graphqlHTTP({
    // data schema defines the graph and objects on graph
    schema,
    graphiql: true
}));

// listen for requests
app.listen(4000, () => {
    console.log('now listening for requests on port 4000')
});