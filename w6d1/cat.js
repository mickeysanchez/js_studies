function Cat(name, owner) {
  this.name = name,
  this.owner = owner
};

Cat.prototype.cuteStatement = function() {
  return this.owner + " loves " + this.name;
}

sennacy = new Cat("Sennacy", "Jonothan");

console.log(sennacy.cuteStatement());

keyboard = new Cat("KeyboardCat", "TheIntranetz");

console.log(keyboard.cuteStatement());

Cat.prototype.meow = function() {
  return "meow"
};

console.log(sennacy.meow());

sennacy.meow = function() {
  return "rrrreow"
};

console.log(sennacy.meow());
console.log(keyboard.meow());