var path = require('path');
var http = require('http');
/**
 * very useful for a robust DB schema when using a noSQL database.
 */
var mongoose = require('mongoose');
var express = require('express');
/**
 * for the parsing of API requests body.
 */
var bodyParser = require('body-parser');

/**
 * this will be the entry level of our API from which all requests branch.
 */
var api = require('./routes/api');

/**
 * Connection URL
 */
var url = 'mongodb://tester:tester@ds135820.mlab.com:35820/track';

/**
 * Use connect method to connect to the Server
 */
mongoose.connect(url);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

/**
 * handle requests to our API
 */
app.use('/api', api);

/**
 * using express' built in middleware to serve static frontend assets.
 */ 
app.use(express.static(path.join(__dirname, '../src')));
app.use(express.static(path.join(__dirname, '../')));

const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));