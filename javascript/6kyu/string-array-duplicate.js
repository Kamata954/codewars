function dup(s) {

  return s.map(word => {
    let filteredWord = word[0];

    for(let i = 1; i < word.length; i++ ) {
      if(word[i] != word[i-1]) filteredWord += word[i];
    }
    return filteredWord;
  })

};

//split string
//for loop up to second to last string so i < length
//


/*
INSTRUCTIONS
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

    dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

    dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!
*/
