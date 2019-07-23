const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema.js');
const path = require('path');
// console.log(path);
// console.log(express.static('scss'));

const app = express();
app.use(cors());
app.use(express.static('public'));
app.get('*',(req,res) => {
    res.send(path.resolve(__dirname,'public','index.html'));
}); 

app.use('/graphql',graphqlHTTP({
    schema, 
    graphiql : true
}));

app.listen(4000);