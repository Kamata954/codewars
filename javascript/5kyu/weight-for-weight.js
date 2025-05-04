function orderWeight(string) {
    // your code
  function getWeight(num){
    return num.split("").reduce((acum,char) => acum + (+char), 0);
  }
  
  let numArray = string.split(" ")
  
  return numArray.sort((a,b) => {
    let weightA = getWeight(a)
    let weightB = getWeight(b)
    if(weightA == weightB){
      if(a < b){
        return -1
      }
      if(a > b){
        return 1
      }
      return 0
    }
    
    return weightA - weightB
  }).join(" ")
}

//weight of numbers is equal to the sum of each individual number
//split string of numbers into array of numbers
//split each number into individual numbers, find their sum use a function for this
//sort each number in the array, if a and b weight same, sort normally else sort by weight
//edge case, if string is empty, return empty array

//INSTRUCTIONS

// My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

// I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

// Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?
// Example:

// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

// "100 180 90 56 65 74 68 86 99"

// When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

// 180 is before 90 since, having the same "weight" (9), it comes before as a string.

// All numbers in the list are positive numbers and the list can be empty.
// Notes

//     it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
//     For C: The result is freed.

