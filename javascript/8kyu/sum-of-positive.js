function positiveSum(arr) {
    return arr.reduce((accum,num) => {
      if(num > 0){
        return accum + num
      }
      return accum
    },0)
  }