setTimeout(function(){
    console.log("Hello World");
},1);

function foo() {
    for (var i=0; i<=1E10; i++) {
        console.log(i);
    }
}

foo();