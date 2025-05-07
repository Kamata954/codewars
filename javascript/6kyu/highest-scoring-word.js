function high(input){
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let alphabetObj = {}
    
    alphabet.split("").forEach((letter,index) => alphabetObj[letter] = index + 1)
    
    let wordArr =input.split(" ")
  
    function getSum(word){
      return word.split("").reduce((accum,letter) => accum + alphabetObj[letter] , 0)
    }
    
    let sumArr = wordArr.map(x => getSum(x))
    let maxSum = Math.max(...sumArr)
    
    return wordArr.filter(x => getSum(x) == maxSum)[0]
  }
  
  // either make own string of all the letters of the alphabet or use charcodeat
  //split input into array of words
  //make a function that will turn every word into the sum of it's letter use reduce
  //use map to change every word to a sum value
  //use math max to find max number
  //filter original array based on if it matches max
  
  //edge case of there being two words with same num
  //use math.max on the array with all words

//INSTRUCTIONS

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.
