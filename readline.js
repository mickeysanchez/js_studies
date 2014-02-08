var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addTwoNumbers(callback)  {

  reader.question("enter #1 ", function(numString1) {
    reader.question("enter #2 ", function(numString2) {
      var num1 = parseInt(numString1);
      var num2 = parseInt(numString2);

      callback(num1+num2);

    });
  });
}

addTwoNumbers(function(result) {
  console.log("The result is: " + result);
});

reader.close;