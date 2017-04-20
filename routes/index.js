var express = require('express');
var request = require('request');

var router = express.Router();

var counter = 0;
var color ;
var teacherId = '8EA6';
var students = [];

router.get('/', function(req, res){
    res.send('push the button');
});

router.get('/reset', function(req, res){
    var { io } = req;

    io.emit('reset');
    counter = 0;

    students.forEach(function(student){
        // Give students feedback
        request('https://oege.ie.hva.nl/~palr001/icu/api.php?t=sdc&d='+teacherId+'&td='+ student + '&c=00ff00&m=Iedereensnapthet!', function(error, response, data){
            if(error){ throw error; }

            request('https://oege.ie.hva.nl/~palr001/icu/api.php?t=sqi&d='+ teacherId, function (error, response, message){ return 'Ghellooo'; });
        });
    });

    students.forEach(function(student){
        // Remove all students
        request('https://oege.ie.hva.nl/~palr001/icu/api.php?t=rdc&d='+student+'&td='+ teacherId + '&c=00ff00', function(error, response, data){
            if(error){ throw error; }
            students.pop(student);
        });
    });
    res.send('test');
});


router.get('/test', function(req,res){
    var { arduinoPort } = req;

    arduinoPort.on('data', function(data) {
        console.log(data);
    });
    res.send(req.roomAir);
});


router.get('/:chipId', function(req,res){
    var { chipId } = req.params;
    var { io } = req;

    if (!students.includes(chipId)) {
        students.push(chipId);
    }

	color = ['00ff00', 'fff000', 'ff6200', 'ff0000'];

    request('https://oege.ie.hva.nl/~palr001/icu/api.php?t=sdc&d='+chipId+'&td='+teacherId+'&c='+color[counter]+'&m=Hoi', function (error, response, data){
        request('https://oege.ie.hva.nl/~palr001/icu/api.php?t=sqi&d='+chipId, function (error, response, message){
            counter++;
            io.emit('counter', counter);
            console.log(counter);
            res.render('test',{title: counter});
        });
    });
});


module.exports = router;
