var express = require('express');
var request = require('request');

var router = express.Router();

router.get('/', function(req, res){
    var studentID = [
        '8EA6',
        'CB1B',
        '180F'
    ];
    studentID.forEach(function(student){
        request('https://oege.ie.hva.nl/~palr001/icu/api.php?t=sdc&d=180F&td='+ student + '&c=00ff00&m=Iedereensnapthet!', function(error, response, data){
            if(error){
                console.log(error);
                console.log('level 1: NIET');
            } else {
                console.log('level 1: WEL');
                request('https://oege.ie.hva.nl/~palr001/icu/api.php?t=sqi&d=180F', function (error, response, message){
                    if(error){
                        console.log(error);
                        console.log('level 2: NIET');
                    }
                });
            }
        });
    });
    res.send('ok');
});
module.exports = router;
