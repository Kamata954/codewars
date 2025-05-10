function getMiddle(s) {
    let string = s.split("")
    return  string.length % 2 ? string[(string.length -1 ) / 2] : string[(string.length / 2) - 1] + string[string.length / 2] 
  }
  
  //check the length of string
  //string length odd, return string length - 1 / 2
  //string length even, return string length / 2 and that value - 1

//INSTRUCTIONS

// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

//     If the string's length is odd, return the middle character.
//     If the string's length is even, return the middle 2 characters.

// Examples:

// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

