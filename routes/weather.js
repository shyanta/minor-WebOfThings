var express = require('express');
var request = require('request');

var router = express.Router();

router.get('/', function(req, res){
    request('http://api.openweathermap.org/data/2.5/weather?q=Amsterdam,nl&APPID=4f6c867ae827b0953fb7928bbfec178b', function(error, response, data){
        console.log(data);
        res.send(data);
    });
});

module.exports = router;
