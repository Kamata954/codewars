function shiftLeft(s, t){
  let count = 0
  let firstWord = s.split("")
  let secondWord = t.split("")

  while(firstWord.join("") != secondWord.join("")){
    if(firstWord.length > secondWord.length){
      firstWord.shift()
      count++
    }
    else if(firstWord.length < secondWord.length){
      secondWord.shift()
      count++
    }
    else if(firstWord.length == secondWord.length){
      firstWord.shift()
      secondWord.shift()
      count += 2
    }
  }
  return count
}

// while loop, s != t
//check to see if first word and second word or the same length
//if word 1 length > word 2, shift word 1, count ++
//else if word 1 length < word 2, shift word 2, count ++
//else if word 1 length == word 2 length, shift word 1, shift word 2, count += 2
//once loop finished, return count

//Instructions

// You are given two strings. In a single move, you can choose any of them, and delete the first (i.e. leftmost) character.

// For Example:

//     By applying a move to the string "where", the result is the string "here".
//     By applying a move to the string "a", the result is an empty string "".

// Implement a function that calculates the minimum number of moves that should be performed to make the given strings equal.
// Notes

//     Both strings consist of lowercase latin letters.
//     If the string is already empty, you cannot perform any more delete operations.
