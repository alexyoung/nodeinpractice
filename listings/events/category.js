var util = require('util');
var events = require('events');

function MusicPlayer() {
  events.EventEmitter.call(this);
  this.on(MusicPlayer.events.play, this.play.bind(this));
}

var e = MusicPlayer.events = { //<co id="callout-events-category-1" />
  play: 'play'
, pause: 'pause'
, stop: 'stop'
, ff: 'ff'
, rw: 'rw'
, addTrack: 'add-track'
};

util.inherits(MusicPlayer, events.EventEmitter);

MusicPlayer.prototype.play = function() {
  this.playing = true;
};

var musicPlayer = new MusicPlayer();

musicPlayer.on(e.play, function() {  //<co id="callout-events-category-2" />
  console.log('Now playing');
});

musicPlayer.emit(e.play);
