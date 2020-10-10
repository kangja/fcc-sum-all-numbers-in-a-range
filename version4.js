function sumAll(arr) {
  let sum = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) { //(...arr) is an example of a spread operator. 
    sum += i;
  }
  return sum;
}

console.log(sumAll([1, 4]));
// 10

console.log(sumAll([4, 1]));
// 10

console.log(sumAll([5, 10]));
// 45

console.log(sumAll([10, 5]));
// 45
