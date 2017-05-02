require('dotenv').config();

var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    exphbs  = require('express-handlebars'),
    http = require('http'),
    socketIO = require('socket.io'),
    serialPort = require('serialport'),
    Twitter = require('twitter');


var routes = require('./routes/index');

var app = express(),
    port = process.env.PORT || 3000;

var server = http.Server(app),
    io = socketIO.listen(server);

var client = new Twitter({
    'consumer_key': process.env.TW_KEY,
    'consumer_secret': process.env.TW_SECRET,
    'access_token_key': process.env.token_KEY,
    'access_token_secret': process.env.token_SECRET
});


var arduinoPort = new serialPort('/dev/cu.SLAB_USBtoUART', {
    baudrate: 9600,
    parser: serialPort.parsers.readline('\n')
});

var env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

// view engine setup

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    partialsDir: ['views/partials/']
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Make stuff available in all reqs
app.use(function(req, res, next) {
    req.io = io;
    req.arduinoPort = arduinoPort;
    req.twitter = client;
    next();
});

// connect all routes
for (var x in routes) {
    if (routes.hasOwnProperty(x)) {
        app.use(x, routes[x]);
    }
}

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace

if (app.get('env') === 'development') {
    app.use(function(err, req, res) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err,
            title: 'error'
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {},
        title: 'error'
    });
});



// socket
io.on('connection', function (socket) {
    console.log('io connection');
    socket.on('check tweet', function(){
        client.get('search/tweets', {q: 'amsterdam'}, function(error, tweets, response) {
            socket.emit('new tweets', tweets.statuses);
        });
    });
});


// Arduino port
arduinoPort.on('open', function(data) {
    console.log('Serial port works');
});


server.listen(port, function() {
    console.log('Express server listening on port ' + this.address().port);
});
