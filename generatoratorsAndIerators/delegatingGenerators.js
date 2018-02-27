// delegatingGenerators.js

function *foo() {
    yield 3;
    yield 4;
}

function *bar() {
    yield 1;
    yield 2;
    yield *foo(); // `yield *` delegates iteration control to `foo()`
    yield 5;
}

for (var v of bar()) {
    console.log( v );
}