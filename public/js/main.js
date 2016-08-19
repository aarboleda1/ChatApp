var socket = io();
var nameVariable = "";
$('form').submit(function() {
	socket.emit('chat message', $('#m').val());
	$('#m').val('');
	return false;
});
socket.on('chat message', function(message) {
	$('#messages').prepend($('<li>').text(message));
	console.dir(data);
});

$('#nameInput').submit(function () {
    nameVariable = $('#nameSubmit').val();
    $('#nameSubmit').val('');
});

//create a jquery funciton
//so that name input variable is assigned to each text

//should be submitted
// //$(document).ready(function(){

//    $(selector).action()

// });