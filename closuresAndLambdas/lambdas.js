let obj = {
  myVar: 'foo',
  
  myFunc: function() { 
    let self = this
    console.log(this.myVar)  
  
    setTimeout(function() {
      console.log(self.myVar)
    }, 1000)
  }
}
obj.myFunc() // foo ... then... foo

//==> lambda version
let obj = {
  myVar: 'foo',
  
  myFunc: function() { 
    console.log(this.myVar)  
  
    setTimeout(() => {
      console.log(this.myVar)
    }, 1000)
  }
}
obj.myFunc() // foo ... then... foo


//binding Arguments

let sum = function() {
  let args = Array.from(arguments) // arguments is available
  return args.reduce((a, b) => a + b, 0)
}
sum(1, 2, 3) // 6

//same with rest parameters

let sum1 = (...args) => {
  return args.reduce((a, b) => a + b, 0)