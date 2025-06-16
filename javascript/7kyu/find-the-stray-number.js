function stray(numbers) {
  let k = numbers.length - 1;
  for (let i = 0; i < Math.floor(numbers.length / 2); i++ ){
    if(numbers[i] != numbers[k]){
      return numbers[i+1] == numbers[k] ? numbers[i] : numbers[k]
    }
    if(numbers[i] == numbers[k]){
      k--
    }
    
  }
  return numbers[Math.floor(numbers.length / 2) ]
}

/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)
Examples

[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3


*/