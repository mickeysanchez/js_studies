var bubbleSort = function(array) {
  var sorted = false;

  while (!sorted) {
    sorted = true;

    for (var i = 0; i < array.length - 1; i++) {
      var j = i + 1;
      if (array[i] > array[j]) {
        var placeholder = array[i];
        array[i] = array[j];
        array[j] = placeholder;

        sorted = false;
      }
    }
  }

  return array;
};


console.log(bubbleSort([1,3,2,6,0]));

var substrings = function(string) {
  var strings = [];

  for (var i = 0; i < string.length; i++) {
    for (var j = i + 1; j <= string.length; j++) {
      strings.push(string.slice(i, j));
    }
  }

  return strings;
};

console.log(substrings("cat"));