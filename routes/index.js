var express = require('express');
var request = require('request');

var router = express.Router();

var counter = 0;
var color ;
var teacherId = '8EA6';
var students = [];

router.get('/', function(req, res){
    var currentTemperature = 22,
    currentHumidity = 25,
    amounOfClicks = 15,
    latestClick = '13:15';
    res.render('dashboard', {
        currentTemperature: currentTemperature,
        currentHumidity: currentHumidity,
        amounOfClicks: amounOfClicks,
        latestClick: latestClick
    });
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

    if (counter < 2) {
        color = '00FF00';
    } else if (counter == 2 || counter == 3) {
        color = 'FFF000';
    } else if (counter == 4 || counter == 5) {
        color = 'FF6200';
    } else if (counter >= 6) {
        color = 'FF0000';
    }

    request('https://oege.ie.hva.nl/~palr001/icu/api.php?t=sdc&d='+chipId+'&td='+teacherId+'&c='+color+'&m=Hoi', function (error, response, data){
        request('https://oege.ie.hva.nl/~palr001/icu/api.php?t=sqi&d='+chipId, function (error, response, message){
            counter++;
            io.emit('counter', counter);
            console.log(counter);
            res.render('test',{title: counter});
        });
    });
});


module.exports = router;
