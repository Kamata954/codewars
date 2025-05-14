var capitals = function (word) {
	let array = []
  word.split("").forEach((letter, index) => {
    if(letter.charCodeAt(0) >= 60 && letter.charCodeAt(0) <= 95){
      array.push(index)
    }
  })
  return array
};

//unicode char for capital letters is 60-95

//Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.
// Example (Input --> Output)

// "CodEWaRs" --> [0,3,4,6]
