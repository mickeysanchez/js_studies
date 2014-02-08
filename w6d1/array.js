Array.prototype.uniq = function () {
  var uniques = new Array();
  for (var i = 0; i < this.length; i++) {
    console.log(this[i])
    if ( uniques.indexOf(this[i]) === -1 ) {
      uniques.push(this[i])
    }
  }
  return uniques
};
/*
var a = new Array(1,2,3,1,2,3);

console.log(a.uniq());
*/
Array.prototype.two_sum = function() {
  var indices = [];
  for (var i = 0; i < this.length - 1; i++) {
    for (var j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        indices.push([i, j]);
      }
    }
  }
  return indices;
}
/*
b = [3, 5, -3, -5, 7];
console.log(b.two_sum());
*/
Array.prototype.transpose = function() {

  var transpose = [];
  for (var k = 0; k < this.length; k++) {
    transpose[k] = [];
  }

  for (var i = 0; i < this.length; i++) {
    for (var j = 0; j < this.length; j++) {
      transpose[i][j] = this[j][i];
    }
  }
  return transpose;
}

// c = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8]
//   ];
//
// console.log(c.transpose());

// console.log([1,2,3,4].map(function (el) { return el*2 }))

Array.prototype.myEach = function(callback) {
  for ( var i = 0; i < this.length; i++ ) {
    callback(this[i]);
  }
}

[1,2,3,4].myEach(console.log);



Array.prototype.myMap = function(callback) {
  var output = [];

  for (var i = 0; i < this.length; i++) {
    output[i] = callback(this[i]);
  }

  return output;
}

// console.log([1,2,3,4].myMap(function(x) {return x + 1}));