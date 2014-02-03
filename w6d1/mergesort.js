var mergeSort = function(array) {
  if (array.length === 1) {
    return array;
  }
  else {
    var middle = Math.floor(array.length/2);
    var left = array.slice(0, middle);
    console.log(left)
    var right = array.slice(middle, array.length);
    console.log(right)

    return merge(mergeSort(left), mergeSort(right));
  }
};

var merge = function(array1, array2) {
  var sorted = [];
  while (array2.length > 0 || array1.length > 0) {
    if (array1[0] > array2[0] || array1.length === 0) {
      sorted.push(array2.shift());
    }
    else {
      sorted.push(array1.shift());
    }
  }
  return sorted.concat(array1.concat(array2));
};

// console.log(mergeSort([2,3,1,5,7,6,0]))