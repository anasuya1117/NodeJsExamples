function Cat(name, color) {
  this.name = name;
  this.color = color;
}
Cat.prototype.age = 0;

var catC = new Cat("Fluffy", "White");