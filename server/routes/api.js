var express = require('express');
var api = express.Router();

var todo = require('./todo');

// Define routing on an API level

api.use('/todo', todo);

module.exports = api;