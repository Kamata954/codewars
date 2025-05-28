function titleCase(title, minorWords) {
  
  if(!title){
    return ""
  }
  
  let titleArray = title.toLowerCase().split(" ")
  let minorArray = []
  minorWords ? minorArray = minorWords.toLowerCase().split(" ") : minorArray[0] = ""
  let minorObj = {}
  
  minorArray.forEach((word,index) => {
    if(minorObj[word] == undefined){
      minorObj[word] = index
    }
  })
  
  let titleCase = titleArray.map((word,index) => {
    if(index === 0 || minorObj[word] == undefined){
      return word[0].toUpperCase() + word.slice(1)
    }
    return word
  })
  
  return titleCase.join(" ")
}
//split title and minor words into an array
//add minor words to an object
//loop over title array
//if word index is 0, splice or slice first letter to upper case
// if word index is not zero, then check if word[index] is included in minorwordso bject 
//included, return as is, not included, return first letter uppercase
//join returned words and return that

//INSTRUCTIONS

//A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.
// Arguments (Haskell)

//     First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
//     Second argument: the original string to be converted.

// Arguments (Other languages)

//     First argument (required): the original string to be converted.
//     Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.

// Example

// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

