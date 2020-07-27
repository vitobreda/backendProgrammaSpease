var express = require('express');
var app = express();

app.get('', function(req, res) {
    res.send('Api Programma Spease')
});


app.listen(3000);