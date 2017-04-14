var express = require('express');
var request = require('request');
var router = express.Router();

var counter = 0;
var color;

router.get('/', function(req, res){
    counter++;
	if (counter < 2) {
		color = "#00FF00";
	} else if (counter == 2 || counter == 3) {
		color = "#FFF000";
	} else if (counter == 4 || counter == 5) {
		color = "#FF6200";
	} else if (counter >= 6) {
		color = "#FF0000";
	}
	console.log(color);
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
	console.log(color);
    res.render("test",{title: counter});

});

router.get('/reset', function(req, res){
    counter = 0;
    res.render("test",{title: counter});
});

module.exports = router;
