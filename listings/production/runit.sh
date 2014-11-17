#!/bin/sh
export PATH=$PATH:/home/vagrant/.nvm/v0.10.26/bin #<co id="callout-production-runit-1" />
cd /home/vagrant/inky #<co id="callout-production-runit-2" />
exec npm start
