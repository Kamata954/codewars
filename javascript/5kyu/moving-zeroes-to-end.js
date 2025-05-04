function moveZeros(arr) {
    let noZeroArray = arr.filter(x => x !== 0)
    let zeroArray = arr.filter(x => x === 0)
    
    return noZeroArray.concat(zeroArray);
  }
  
  //filter out all the zeroes, store it in a value
  //filter out al the non zeros, storei it in a value
  //concat both 

//INSTRUCTIONS

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0]