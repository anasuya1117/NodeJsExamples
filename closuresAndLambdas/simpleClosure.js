// simpleClosure.js


var add = function(passed){
	var inner = 2;
	return inner + passed;
}

console.dir(add(2));