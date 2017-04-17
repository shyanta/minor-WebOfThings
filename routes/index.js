var express = require('express');
var request = require('request');

var router = express.Router();

var counter = 0;

router.get('/', function(req, res){
    var { io } = req;

    request('https://oege.ie.hva.nl/~palr001/icu/api.php?t=sdc&d=180F&td=8EA6&c=ff6200&m=Hoi', function (error, response, data){
        console.log(data);
        request('https://oege.ie.hva.nl/~palr001/icu/api.php?t=sqi&d=180F', function (error, response, message){
            counter++;
            io.emit('counter', counter);

            res.render('test',{title: counter});
        });
    });
});

router.get('/reset', function(req, res){
    var { io } = req;

    io.emit('reset');
    counter = 0;

    res.render('test',{title: counter});
});

module.exports = router;
