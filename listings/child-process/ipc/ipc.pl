#!/usr/bin/env perl
use IO::Socket;

print 'NODE_CHANNEL_FD: '.$ENV{'NODE_CHANNEL_FD'};

my $ipc = IO::Socket->new();
$ipc->fdopen($ENV{'NODE_CHANNEL_FD'}, '+<');

while (my $line = $ipc->getline) {
  print "child received: ".$line;
  $ipc->send($line);
}
