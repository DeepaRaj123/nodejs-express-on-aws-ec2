'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const enquiryRoutes = require('./routes/enquiry-routes');


var MONGODB_URI ='mongodb+srv://perfectionelectronics23:chickenfry@perfection.ucgqfyh.mongodb.net/perfection?retryWrites=true&w=majority'
;
var port = 3000;

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', enquiryRoutes.routes);

mongoose
.connect(MONGODB_URI,{ useNewUrlParser: true,useUnifiedTopology: true})
.then(result => {
  console.log('App is listening on url http://localhost:' + port);
  app.listen(port);
})
.catch(err => {
  console.log(err);
});