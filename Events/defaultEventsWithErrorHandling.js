var events = require('events');
var eventEmitter = new events.EventEmitter();

var ringBell = function ringBell(){
  console.log('ring ring ring');
}

process.on('uncaughtException', function(err) {  
  console.error('uncaught exception:', err.stack || err);
});

eventEmitter.on('doorOpen', ringBell);

eventEmitter.emit('doorOpen');

eventEmitter.emit('test');


