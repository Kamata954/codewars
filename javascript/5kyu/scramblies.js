function scramble(str1, str2) {
    let objCount = {}
    
    str1.split("").forEach((letter) => {
      if(!objCount[letter]){
        objCount[letter] = 1
      }
      else if(objCount[letter]){
        objCount[letter]++
      }
    })
    
    return str2.split("").every(letter => {
      if(objCount[letter] > 0){
        objCount[letter]--
        return true
      }
      return false
    })
  
  }
  
  
  //loop through string 1
  //add every letter to a count in an object
  //loop through string 2 with every 
  //check if string 2 is in obj. if it is, decrement obj and return true, 
  //if it isn't return false
  
  //could be better performance wise

//Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.

// Examples

// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

