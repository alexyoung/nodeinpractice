function play(track) { //<co id="callout-events-inherit-3-1" />
  this.playing = true;
});

musicPlayer.on('play', play);

musicPlayer.removeListener('play', play);
