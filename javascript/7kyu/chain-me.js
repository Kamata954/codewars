function chain(input, fs) {
  let result = fs[0](input)
  for(let i = 1; i < fs.length; i++){
    result = fs[i](result)
  }
  return result
}

//find length of array
//depending how many items in array, that's how many times to chain
//for loop, i starst at one
//save the intial result of the first function in a variable
//in the loop, put result in fs[i]
//make the result equal to return value of fs[i]
//return result

// Write a generic function chainer

// Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

// The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

// function add(num) {
//   return num + 1;
// }

// function mult(num) {
//   return num * 30;
// }

// chain(2, [add, mult]);
// // returns 90;
