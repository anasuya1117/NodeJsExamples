var CustomEmitter = require("./emitter");
var emtr = new CustomEmitter();

emtr.on('greet', function(){
	console.log('Hello there');
});

emtr.on('greet', function(){
	console.log('Greeting you again');
});

emtr.on('test', function(){
	console.log('Testing the events');
});

emtr.emit('greet');
emtr.emit('test');

emtr.removeListener('greet');
