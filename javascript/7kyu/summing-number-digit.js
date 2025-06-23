function sumDigits(number) {
  let num = number.toString()
  let sum = 0
  for(let i = 0; i < num.length; i++){
    if(parseInt(num[i]) >= 0 )sum += parseInt(num[i])
  }
  return sum;
}
//cant split primtive, turn into string, loop, math abs
