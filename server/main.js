"use strict";
var express = require('express');
var app = new express();
var parser = require('body-parser');
require('./database.js');
app.get('/', function(req, res) {
  res.render('./../app/index.ejs', {});
})
.use(express.static(__dirname + '/../.tmp'))
.listen(7777);

app.use(parser.json()); // process json
app.use(parser.urlencoded({extended:false})); // For post requests
require('./routes/cars.js')(app); // THIS IS A FUNCTION
