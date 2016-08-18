lsvar socket = io();
$('form').submit(function() {
	socket.emit('chat message', $('#m').val());
	//takes value 
	$('#m').val('');
	return false;
});
socket.on('chat message', function(message) {
	$('#messages').append($('<li>').text(message));
});