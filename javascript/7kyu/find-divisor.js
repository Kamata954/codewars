function divisors(integer) {
  let divisorArray = [];
  for(let i = 2; i < integer; i++){
    if(integer % i == 0) divisorArray.push(i);
  }
  
  return divisorArray[0] ? divisorArray : `${integer} is prime`;
}
//loop from the number 2 to right before the interger
// num mod i is zero, is divisor push to divisor array
//check if divisor array is empty, if it is return number is prime
//if not return divsor array