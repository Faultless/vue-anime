var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var api = require('./api');

var router = express.Router();

/**
 * this will be the entry level of our API from which all requests branch.
 */
router.use('/api', api);

router.get('/', function (req, res) {  
    res.render('index', { user : req.user });
});

/**
 * a helper to get the currently logged user via our Vue Application.
 */
router.get('/user', function(req, res) {
    if(req.user){
        res.send({ user: req.user.username });
    }
});

router.get('/register', function(req, res) {
    res.render('register', { });
});

router.post('/register', function(req, res) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
            return res.render('register', { account : account });
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});

router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;