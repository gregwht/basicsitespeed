//JS - Audio
// From https://code.tutsplus.com/tutorials/the-web-audio-api-what-is-it--cms-23735

var context = new webkitAudioContext(); // Create audio context
var request = new XMLHttpRequest(); // Get the sound file

request.open('GET', 'test.mp3', true);
request.responseType = 'arraybuffer';

request.onload = function() {
  var undecodedAudio = request.response;

  context.decodeAudioData(undecodedAudio, function(buffer){
    // Create the AudioBufferSourceNode
    var sourceBuffer = context.createBufferSource();

    // Tell the AudioBufferSourceNode to use this AudioBuffer
    sourceBuffer.buffer = buffer;
    sourceBuffer.connect(context.destination);
    sourceBuffer.start(context.currentTime);
  });
};

request.send();
