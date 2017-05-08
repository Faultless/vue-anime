var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

/** 
 * @function Schema(Schema)
 * @desc New Account Schema
 * @param {object} Schema - represents a user's schema with username and password. 
 */
var Account = new Schema({
    username: String,
    password: String
});

/** Registers the passport-mongoose plugin with our Schema with built in salting and hashing of password! :) */
Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);