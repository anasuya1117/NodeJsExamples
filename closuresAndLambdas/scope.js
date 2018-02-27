//variableEnvironment: {x: undefined, etc.};
var x = "global";
//variableEnvironment: {x: "global", etc.};
 
function outer() {
    //variableEnvironment: {y: undefined};
    var y = "outer";
    //variableEnvironment: {y: "outer"};
 
    function inner() {
        //variableEnvironment: {x: undefined};
        var x = "inner";    
        //variableEnvironment: {x: "inner"};
    }

    
}


