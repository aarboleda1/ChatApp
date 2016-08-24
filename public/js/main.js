var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room');
var socket = io();

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    return undefined;
}

// Listen for chat message to be submitted
socket.on('message', function(message) {
  var momentTimestamp = moment.utc(message.timestamp);
  var $message = $('.messages');

	$message.prepend('<div class="message-div"><p>' + momentTimestamp.local().format('h:mm a') + ' <strong>' + message.name + ':</strong> ' + message.text + '</p></div>');
});

// Handle of submitting new messages
var $messageForm = $('#message-form');
$messageForm.on('submit', function (event) {
  event.preventDefault();

  var $message = $messageForm.find('input[name=message]');

  socket.emit('message', {
    name: name,
    text: $message.val()
  });

  $message.val('');
});

//
// function init() {
//
// 	var main = document.querySelector('main');
// 	var mosaicContainer = document.getElementById('mosaic');
// 	var videoWidth= 0, videoHeight = 0;
// 	var videoElement;
// 	var shooter;
// 	var imagesPerRow = 5;
// 	var maxImages = 20;
//
// 	window.addEventListener('resize', onResize);
//
// 	GumHelper.startVideoStreaming(function(error, stream, videoEl, width, height) {
// 		if(error) {
// 			alert('Cannot open the camera. Sad times: ' + error.message);
// 			return;
// 		}
//
// 		videoElement = videoEl;
// 		videoElement.width = width / 4;
// 		videoElement.height = height / 4;
// 		videoWidth = width;
// 		videoHeight = height;
//
// 		main.appendChild(videoElement);
//
// 		shooter = new VideoShooter(videoElement);
//
// 		onResize();
//
// 		startCapturing();
// 	});
//
// 	function startCapturing() {
//
// 		shooter.getShot(onFrameCaptured, 10, 0.2, function onProgress(progress) {
//       console.log("getShot called")
// 			// Not doing anything in the callback,
// 			// but you could animate a progress bar or similar using the `progress` value
// 		});
// 	}
//
// 	function onFrameCaptured(pictureData) {
// 		var img = document.createElement('img');
// 		img.src = pictureData;
//
// 		var imageSize = getImageSize();
//
// 		img.style.width = imageSize[0] + 'px';
// 		img.style.height = imageSize[1] + 'px';
//
// 		mosaicContainer.insertBefore(img, mosaicContainer.firstChild);
//
// 		if(mosaicContainer.childElementCount > maxImages) {
// 			mosaicContainer.removeChild(mosaicContainer.lastChild);
// 		}
//
// 		setTimeout(startCapturing, 10);
// 	}
//
// 	function getImageSize() {
// 		var windowWidth = window.innerWidth;
// 		var imageWidth = Math.round(windowWidth / imagesPerRow);
// 		var imageHeight = (imageWidth / videoWidth) * videoHeight;
//
// 		return [ imageWidth, imageHeight ];
// 	}
//
// 	function onResize(e) {
//
// 		// Don't do anything until we have a video element from which to derive sizes
// 		if(!videoElement) {
// 			return;
// 		}
//
// 		var imageSize = getImageSize();
// 		var imageWidth = imageSize[0] + 'px';
// 		var imageHeight = imageSize[1] + 'px';
//
// 		for(var i = 0; i < mosaicContainer.childElementCount; i++) {
// 			var img = mosaicContainer.children[i];
// 			img.style.width = imageWidth;
// 			img.style.height = imageHeight;
// 		}
//
// 		videoElement.style.width = imageWidth;
// 		videoElement.style.height = imageHeight;
//
// 	}
//
// }
//
// window.addEventListener('DOMContentLoaded', init);
//
