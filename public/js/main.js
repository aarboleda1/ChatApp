var socket = io();
var nameVariable = "";
console.log(nameVariable);

// Save user name
$('.nameInput').submit(function () {
    nameVariable = $('#nameSubmit').val();
    $('#nameSubmit').val('');
		return false;
});

// Post message to chatroom
$('.sendchat').submit(function() {
	socket.emit('chat message', $('#m').val());
	$('#m').val('');
	return false;
});

// Listen for chat message to be submitted
socket.on('chat message', function(message) {
	$('#messages').prepend($('<li>').text(nameVariable + ": " + message));
	// console.dir(data); -- Commented out until further need
});



//create a jquery funciton
//so that name input variable is assigned to each text

//should be submitted
// //$(document).ready(function(){

//    $(selector).action()

// });
