function sumOfMinimums(arr) {
  return arr.reduce((accum, arr) => {
    return accum += Math.min(...arr)
  },0)
}

//use reduce, loop over array
// spread array, do math mind, add that to sum
//return reduce
