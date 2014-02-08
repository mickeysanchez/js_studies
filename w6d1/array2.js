Array.prototype.myEach = function(callback) {
  for ( var i = 0; i < this.length; i++ ) {
    callback(this[i]);
  }
};

//
// Array.prototype.myMap = function(callback) {
//   var output = [];
//
//   for (var i = 0; i < this.length; i++) {
//     output[i] = callback(this[i]);
//   }
//
//   return output;
// };
//
// console.log([1,2,3,4].myMap(function(x) { return x*2; }));


Array.prototype.myMap = function(callback) {
  var output = [];

  this.myEach(function(x) { output.push(callback(x)) } )

  return output;
};

// console.log([1,2,3].myMap(function (x) { return x*2 } ))

Array.prototype.myInject = function(callback) {
  var accum = this.shift();

  this.myEach(function (x) { accum = callback(accum, x) })

  return accum;
};

console.log([1,2,3].myInject(function(accum, x) {return accum + x}))



