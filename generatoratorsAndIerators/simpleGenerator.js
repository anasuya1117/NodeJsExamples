function *foo() {
    var x = 1 + (yield "foo");
    console.log(x);
}


var it = foo()
console.log(it.next());
console.log(it.next(10));