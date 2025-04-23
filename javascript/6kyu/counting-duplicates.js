function duplicateCount(text){
    let objectCount = {};
    let numOfDuplicates = 0;
    
    text.toLowerCase().split("").forEach(letter => {
      if(!objectCount[letter]){
        objectCount[letter] = 1;
      }
      else if(objectCount[letter] === 1){
        objectCount[letter] += 1;
        numOfDuplicates += 1;
      }
    })
    
    return numOfDuplicates;
  }
  
  //first thing is to make all chars lower case
  //create an object to store count
  //create val called numOfduplicates
  //loop through the array once
  //if charCount[char] doesnt exist, initialize to 1
  //if it charCount[char] == to 1 , increment charCount[char], numOfDuplicates ++

//INSTRUCTIONS

// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice
