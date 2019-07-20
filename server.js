const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema.js');

const app = express();
app.use(cors());
app.use('/graphql',graphqlHTTP({
    schema, 
    graphiql : true
}));

app.listen(4000);