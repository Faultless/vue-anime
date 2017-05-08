var path = require('path');
var http = require('http');

var routes = require('./routes/index');

/** Authetication using Passport js */
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

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

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(require('express-session')({
    secret: 'todo challenge',
    resave: false,
    saveUninitialized: false
}))

/** Config express to use passport as middleware */
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: false }));

/** Setup routing */
app.use('/', routes);

// passport config
var Account = require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

/**
 * using express' built in middleware to serve static frontend assets.
 */ 
app.use(express.static(path.join(__dirname, '../dist')));

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