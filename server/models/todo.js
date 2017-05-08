var mongoose = require('mongoose');

// Define our TODOs schema to make use of the powerful databinding offered by mongoose.
var todo = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
    user: String
});

module.exports = mongoose.model('Todo', todo);