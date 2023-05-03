// get the video element
var video = document.querySelector('iframe');

// get the play button
var playButton = document.querySelector('.play-button');

// add event listener to play button
playButton.addEventListener('click', function() {
	// play the video
	video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
});

// get the mute button
var muteButton = document.querySelector('.mute-button');

// add event listener to mute button
muteButton.addEventListener('click', function() {
	// mute the video
	video.contentWindow.postMessage('{"event":"command","func":"mute","args":""}', '*');
});
