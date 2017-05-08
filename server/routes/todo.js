var express = require('express');
var model = require('../models/todo');

// allows us to define routes on the todo level specifically.
var todo = express.Router();

todo.route('/:user')
    // List all todos
    .get((req, res) => {
        model.find({ 'user': req.params.user }, (err, todos) => {
            if(err)
                res.send(err);
            res.json(todos);
        });
    })

    // create a todo
    .post((req, res) => {
        var newtodo = new model({
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed,
            user: req.body.user
        });

        newtodo.save((err) => {
            if(err)
                res.send(err);
            res.json({message: 'todo Created!'});
        });
    });

todo.route('/:user/:todoId')
    // get a specific todo based on ID
    .get((req, res) => {
        model.find({ '_id': req.params.todoId, 'user': req.params.user }, (err, todo) => {
            if(err)
                res.send(err);
            res.json(todo);
        });
    })

    // modify a specific todo
    .put((req, res) => {
        var newtodo = model.findById(req.params.todoId, (err, todo) => {
            if(err)
                res.send(err);
            todo.title = req.body.title;
            todo.description = req.body.description;
            todo.completed = req.body.completed;

            todo.save((err) => {
                if(err)
                    res.send(err);
                res.json({message: "todo Modified!"});
            });
        });
    })

    // delete a specific todo
    .delete((req, res) => {
        model.remove({ 
            _id: req.params.todoId
            }, (err) => {
                if(err)
                    res.send(err);
                res.json({message: 'Successfully Removed todo.'});
        })
    });

module.exports = todo;