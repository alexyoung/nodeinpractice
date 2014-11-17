#!/usr/bin/env ruby
require 'socket'

IPC = Socket.for_fd(ENV['NODE_CHANNEL_FD'].to_i)

loop do
  data = IPC.recv(256)
  puts 'child received', data
  IPC.send(data, 0)
end
