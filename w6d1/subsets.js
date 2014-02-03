var subsets = function(array) {
  if (array.length === 0) {
    return [[]];
  } else {
    var element = array.pop();
    var base = subsets(array);

    var thisTime = [];
    for (var i = 0; i < base.length; i++) {
      thisTime.push(base[i].concat(element));
    };

    var answer = base.concat(thisTime);
    return answer;
  }
};

console.log(subsets([1,2,3]));