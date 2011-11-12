var Hook = require('hook.io').Hook;

function Hoooker (options) {
  var self = this;
  Hook.call(this, options);

  this.knobData = [0,0,0,0,0,0];
  this.on('hook::ready', function() {
    
    self.on('serial::knobs', function(data) {
      console.log(data);

      //self.emit('browser::knobs', self.knobData);
    });
  });
};

require('util').inherits(Hoooker, Hook);

var hooker = new Hoooker();
hooker.start();