String.prototype.camelCase=function(){
    let words = this.split(" ")
    return words.map(word => {
      return word.length > 0 ? word[0].toUpperCase() + word.slice(1) : word
    }).join("")
  }

//Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.
// Examples (input --> output):

// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"

// Don't forget to rate this kata! Thanks :)
