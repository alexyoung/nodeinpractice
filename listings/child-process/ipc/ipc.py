#!/usr/bin/env python
import socket
import os

print 'NODE_CHANNEL_FD: ', os.environ['NODE_CHANNEL_FD'], '\n'
ipc = socket.fromfd(int(os.environ['NODE_CHANNEL_FD']), socket.AF_UNIX, socket.SOCK_STREAM)

while True:
	line = ipc.recv(256)
	print "child received", line
	ipc.send(line)
