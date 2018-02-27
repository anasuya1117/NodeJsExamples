//basic function

var validate = function(username, password) {
    if(username == 'foo' && password == 'bar') {
        return true;
    }

    return false;
}


//Single expressions

//Traditional Function

var validate = function(username, password) {
    return username == 'foo' && password == 'bar';
}

//Arrow Function

var validate = (username, password) => username == 'foo' && password == 'bar';

//implicit binding

function outer() {
    this.username = 'foo';
    this.password = 'bar';

    function validate = () => this.username == 'foo' && this.password == 'bar';
}

//Parameterless Arrow Functions

() => { ... }


_ => { ... }

// _ should not be used while using loadsh

//rest parameters

function() {
    var validate = (username, password, ...attributes) {
        console.log(username);
        console.log(password);

        // loop through attributes array and log each value
        for(var i=0; i < attributes.length; i++) {
            console.log(attributes[i]);
        }
    }
}
