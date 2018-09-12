const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//import bodyParser from 'body-parser';
const errorHandler = require('errorhandler');
const port = process.env.PORT || 4002;
const {graphql} = require('graphql');
/*  Graph QL */
const dev=process.env.NODE_ENV !== 'production'
const graphqlHttp=require('express-graphql');
const cors = require ('cors');
const schema=require('./schema');
var colors = require('colors');
//mongoose
const mongoose =require ('mongoose');


app.use('/graphql', cors(), graphqlHttp(() => ({
    schema: schema,
    graphiql: true
})));

app.all('*', function (req, res, next) {
   res.set('Access-Control-Allow-Origin', '*');
   res.set('Access-Control-Allow-Credentials', true);
   res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
   res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
   if ('OPTIONS' == req.method) return res.send(200);
   next();
});
app.use(errorHandler);




app.listen(4002, () => {
  console.log(`signUp running on port ${port}`.green);
})
