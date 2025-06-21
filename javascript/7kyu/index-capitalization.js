function capitalize(string, indices) {
  let strArr = string.split("")
  for(let i = 0; i < indices.length; i ++){
      if(indices[i] < string.length){
        strArr[indices[i]] = strArr[indices[i]].toUpperCase()
      }
    }
  return strArr.join("");
}

// you get a number that is greater than the length of the string
//you get a number that is less than the the lenght of the string? like a negative number
//loop over num array
//if indice is less than string length, then let string at index to upper case
//return string
