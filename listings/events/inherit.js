var util = require('util');
var events = require('events');
var AudioDevice = {
  play: function(track) {
    // Stub: Trigger playback through iTunes, mpg123, etc.
  },

  stop: function() {
  }
};

function MusicPlayer() {
  this.playing = false; //<co id="callout-events-inherit-1" />
  events.EventEmitter.call(this);
}

util.inherits(MusicPlayer, events.EventEmitter); //<co id="callout-events-inherit-2" />

var musicPlayer = new MusicPlayer();

musicPlayer.on('play', function(track) {
  this.playing = true;
  AudioDevice.play(track);
});

musicPlayer.on('stop', function() {
  this.playing = false;
  AudioDevice.stop();
});

musicPlayer.emit('play', 'The Roots - The Fire'); //<co id="callout-events-inherit-3" />

setTimeout(function() {
  musicPlayer.emit('stop');
}, 1000);
