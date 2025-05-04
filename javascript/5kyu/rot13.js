function rot13(message){
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let alphabetObj = {}
    
    for(let [index,letter] of alphabet.split('').entries()){
      alphabetObj[letter] = index + 1
    }
    
    return message.split('').map(letter => {
      let cipherPosition = alphabetObj[letter.toLowerCase()] + 13
      let cipherLetter = ''
      if(cipherPosition <= 26){
        cipherLetter = alphabet.split('')[cipherPosition - 1]
        return letter.charCodeAt(0) < 91 ? cipherLetter.toUpperCase() : cipherLetter
      }
      else if (cipherPosition > 26){
        cipherPosition = 13 - (26 - alphabetObj[letter.toLowerCase()])
        cipherLetter = alphabet.split('')[cipherPosition - 1]
        return letter.charCodeAt(0) < 91 ? cipherLetter.toUpperCase() : cipherLetter
      } else {
        return letter
      }
    }).join("")
  }

//INSTRUCTIONS

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
