lsvar socket = io();
var nameVariable = "";
$('form').submit(function() {
	socket.emit('chat message', $('#m').val());
	//takes value 
	$('#m').val('');
	return false;
});
socket.on('chat message', function(message) {
	$('#messages').append($('<li>').text(nameVariable + message));
});

$('#nameInput').submit(function () {
    nameVariable = $('#nameSubmit').val();
    $('#nameSubmit').val('');
});



//should be submitted
// //$(document).ready(function(){

//    $(selector).action()

// });