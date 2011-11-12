#!/usr/bin/env node

var Webserver = require('hook.io-webserver').Webserver;

var webserver = new Webserver({
  name: 'hook.io-webserver',
  port: 9000,
  webroot: './public'
});

webserver.start();
