var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res){
  var studentID = [
    '8EA6',
    'CB1B'
  ];

  studentID.forEach(function(student){
    request(('https://oege.ie.hva.nl/~palr001/icu/api.php?t=sdc&d=180F&td='+ student + '&c=00ff00&m=Iedereensnapthet!'), function(error, response, data){
      if(error){
        console.log(error);
      } else {
        request('https://oege.ie.hva.nl/~palr001/icu/api.php?t=sqi&d=180F', function (error, response, message){
          if(error){
            console.log(error);
          }
      });
    });
  });
});
//00ff00
module.exports = router;
