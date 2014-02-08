var range = function(start, end) {
  if (end - start === 2) {
    return [start + 1];
  } else {
    var base = range(start, end - 1);
    base.push(end - 1);
    return base;
  }
};

// console.log(range(1,10));

var iterativeSum = function(array) {
  var sum = 0;

  for (var i = 0; i < array.length; i++ ) {
    sum += array[i]
  }

  return sum;
}

// console.log(iterativeSum([1,2,3,4]))

var recursiveSum = function(array) {
  if (array.length === 1) {
    return array[0];
  }
  else {
    return array.pop() + recursiveSum(array);
  }
};

// console.log(recursiveSum([1,2,3,4]));


var exp1 = function(b, n) {
  if (n === 0) {
    return 1;
  }
  else {
    return b * exp1(b, n-1);
  }
};

// console.log(exp1(2,8));

var exp2 = function(b,n) {
  if (n === 0) {
    return 1;
  }
  else if ( n % 2 === 0) {
    return exp2(b, n/2) * exp2(b, n/2);
  }
  else {
    return b * exp2(b, (n-1)/2) * exp2(b, (n-1)/2);
  }
};

// console.log(exp2(2,8));


var fibonacci = function (n) {
  if (n===1) {
    return [0, 1]
  } else {
    var base = fibonacci(n - 1);
    base.push(base[base.length - 1] + base[base.length - 2]);
    return base;
  }
};

// console.log(fibonacci(7));

var bsearch = function (array, target) {
  console.log(array);
  if (array.length === 1) {
    if (array[0] === target) {
      console.log(0);
      return 0;
    } else {
      return console.log(null);
    }
  } else {

    var middle = Math.floor(array.length/2)

    if (target < array[middle]) {
      console.log(0);
      var nextStep = bsearch(array.slice(0, middle), target);
      return nextStep;
    }
    else  {
      console.log(middle);
      return middle + bsearch(array.slice(middle, array.length), target);
    }

  }

};

// console.log(bsearch([0,1,2,3,4,5,6,7], 4))

var makeChange = function (amount, coins) {
  if (amount === 0) {
    return [];
  }
  else {
    var largestCoin = coins.shift();
    var purse = [];
    while (amount >= largestCoin) {
      amount -= largestCoin;
      purse.push(largestCoin);
    }
    var base = makeChange(amount, coins);
    var result = purse.concat(base); //base.push(purse);
    return result;
  }
}

console.log(makeChange(39, [10, 7, 1]))