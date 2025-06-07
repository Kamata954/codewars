function toWeirdCase(string){
  let counter = 0

  return string.split("").map((char,index) => {
    if(char == " "){
      counter = 0;
      return char;
    }
    else if (counter % 2 == 0){
      counter++
      return char.toUpperCase();
    }
    else {
      counter++
      return char.toLowerCase();
    }
  }).join("")

}

/*
INSTRUCTIONS
Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
Examples:

"String" => "StRiNg"
"Weird string case" => "WeIrD StRiNg CaSe"


*/
