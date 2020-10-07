// *******************************************

// Intermediate Algorithm Scripting: Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.


// sumAll([1, 4]) should return a number.
// sumAll([1, 4]) should return 10.
// sumAll([4, 1]) should return 10.
// sumAll([5, 10]) should return 45.
// sumAll([10, 5]) should return 45.

// *******************************************


// *****************************************PSEUDOCODE***************************************

// 1+2+3+4 = 10

// let sum = 0
// let range = []

//when given two numbers/array, get the range including the numbers and push it to the emptyArray.

// WHEN given two numbers, check if firstNumber is greater than secondNumber.  
// ex) 4 < 2
// then do for loop and do i--;
// and sum up

// else if 
// ex) 2 > 4
// do i++

// THEN, sum all the range including the number and return the sum

// 

// 3.

// // **************************************************************************************

function sumAll(arr) {
  let sum = 0;
  let emptyArray = [];

  if (arr[0] < arr[1]) {
    for (let i = arr[0]; i <= arr[1]; i++) {
      emptyArray.push(i)
    }
  } else {
    for (let i = arr[0]; i >= arr[1]; i--) { //arr[0] = 4; arr[1] = 1;
      emptyArray.push(i)
    }
  }

  for (let i = 0; i < emptyArray.length; i++) {
    sum += emptyArray[i]
    console.log("this is the value of sum: " + sum )
  }
    return sum
}

console.log(sumAll([1, 4]));
// 10

console.log(sumAll([4, 1]));
// 10

console.log(sumAll([5, 10]));
// 45

console.log(sumAll([10, 5]));
// 45