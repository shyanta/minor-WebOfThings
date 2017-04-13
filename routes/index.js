var express = require('express');
var request = require('request');
var router = express.Router();

var counter = 0;

router.get('/', function(req, res){
    counter++;
  request('https://oege.ie.hva.nl/~palr001/icu/api.php?t=sdc&d=180F&td=8EA6&c=ff6200&m=Hoi', function (error, response, data){
    if(error){
      console.log(error);
    } else {
      console.log(data);
      request('https://oege.ie.hva.nl/~palr001/icu/api.php?t=sqi&d=180F', function (error, response, message){
        if(error){
          console.log(error);
        }
        console.log(message);
        res.redirect("/test");
      });
    }
  });
});

router.get('/test', function(req, res){
    res.render("test",{title: counter});
});

router.get('/reset', function(req, res){
    counter = 0;
    res.render("test",{title: counter});
});

module.exports = router;
