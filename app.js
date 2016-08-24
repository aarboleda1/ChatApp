var moment = require('moment');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var path = require('path');
var session = require('express-session')

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket) {

	socket.on('message', function(message) {
		message.timestamp = moment().valueOf();
		io.emit('message', message);
	});

});

http.listen(process.env.PORT || 5000, function() {
	console.log('Server started');
});
