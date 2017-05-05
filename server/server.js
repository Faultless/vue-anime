var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname, '../src')))
app.use(express.static(path.join(__dirname, '../')))

app.listen(3000, '127.0.0.1', function(err, res) {
    if (err)
        res.send(err);
    console.log('server running on port 3000');
});