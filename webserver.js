#!/usr/bin/env node

var Webserver = require('hook.io-webserver').Webserver;
var Hook = require('hook.io').Hook;

function Hooker() {
  Hook.call(this);
}
require('util').inherits(Hooker, Hook);
var hooker = new Hooker({});

var webserver = new Webserver({
  name: 'hook.io-webserver',
  port: 9000,
  webroot: __dirname + '/public'
});

webserver.start();

hooker.on('serial::knobs', function(data) {
  webserver.sendToBrowser('serial::knobs', data);
});

hooker.start();