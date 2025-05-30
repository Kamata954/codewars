function inArray(array1,array2){
  let substringArray = []
  
  array1.forEach(word1=> {
    array2.forEach(word2 => {
      if(word2.includes(word1) && !substringArray.includes(word1) ) {
        substringArray.push(word1)
      }
    })
  })
  return substringArray.sort()
}

//loop over array 1, loop over array 2 
//check if each word in array one is in array 2 with includes
//if array 1 word is included in array 2 word, push to includes array

//INSTRUCTIONS

// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
// Example 1:

// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]
// Example 2:

// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []
// Notes:

//     Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
//     In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
//     Beware: In some languages r must be without duplicates.

