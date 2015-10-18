// Sum of all numbers in a range

function sumAll(arr) {
total = 0;  
var min = Math.min(...arr);
var max = Math.max(...arr);
  for(i= min; i <= max; i++) {
    total += i;
  }
return total;
}
sumAll([1, 4]);

// Return largest numbers in arrays

function largestOfFour(arr) {
    max_array = [];
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < 1; j++) {
       max_array.push(Math.max.apply(null, arr[i]));
    }
  }
  return max_array;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
