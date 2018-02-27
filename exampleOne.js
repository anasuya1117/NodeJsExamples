var obj = {
	greet: 'Hello'
}

console.log("obj.greet -- > " , obj.greet);
console.log("obj['greet'] --> " ,obj['greet']);

var prop = 'greet';
console.log("obj[prop] --> ", obj[prop]);


var arr = [];
arr.push('hello');
arr.push(1000);
arr.push(obj);

arr.forEach(function(item){
	console.log(item);
});