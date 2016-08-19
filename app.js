var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var session = require('express-session')

app.use('/public', express.static(path.join(__dirname + '/public')));
//
app.get('/',function(req,response){
	response.sendfile('index.html');
});

io.on('connection', function(socket) {

	// app.use(session({
	// genid: function (req) {
	// 	console.log(genuuid())
	// 	return genuuid()    //use UUIDs for session IDs
	// },
// 	secret: 'keyboard dog'
// }));
// =======
  var addedUser = false;

  // socket.on('add user', function (username) {
  //   if (addedUser) {
  //     return;
  //   }
	//
  //   socket.username = username;
  //   addedUser = true;
	//
  //   socket.broadcoast.emit('user joined', {
  //     username: socket.username
  //   });
  // });


	socket.on('chat message', function(message) {
		io.emit('chat message', message);
	});

  return false;
});

http.listen(process.env.PORT || 5000, function(){
	console.log('Server started');
});
