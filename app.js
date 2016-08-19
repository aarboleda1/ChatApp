var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.use('/public', express.static(path.join(__dirname + '/public')));
//
app.get('/',function(req,response){
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
