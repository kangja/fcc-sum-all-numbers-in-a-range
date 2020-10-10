function sumAll(arr) {
  let min, max;
  if (arr[0] > arr[1]) {
    max = arr[0];
    min = arr[1];
  } else {
    max = arr[1];
    min = arr[0]
  }

  let sum = 0; 
  for (let i = min; i <= max; i++) {  //it is i<=max because we want to include the maximum. 
    sum += i;
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
