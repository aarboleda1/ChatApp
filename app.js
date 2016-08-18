var express = require('express')();
var http = require('http').Server(express);
var io = require('socket.io')(http);

//
express.get('/',function(req,response){
	response.sendfile('index.html');
});

io.on('connection', function(socket) {
	socket.on('chat message', function(message) {
		io.emit('chat message', message);
	});
});

http.listen(process.env.PORT || 5000, function(){
	console.log('Server started');
});