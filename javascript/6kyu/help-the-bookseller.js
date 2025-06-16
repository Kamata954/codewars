function stockList(books, categories) {
  let obj = {};
  let array = [];
  let counter = 0;
  
  for(let letter of categories){
    obj[letter] = 0;
  }
  
  for(let i = 0; i < books.length; i++){
      let splitBooks = books[i].split(" ");
      if(obj[splitBooks[0][0]] != undefined){
        obj[splitBooks[0][0]] += parseInt(splitBooks[1]);
      }
    }
  
  Object.keys(obj).forEach(key => {
    if(obj[key] == 0){
      counter++
    }
    array.push(`(${key} : ${obj[key]})`);
  })
  
  return counter == categories.length ? "" : array.join(" - ");
}

//loop books, and seperate code from the number
//go through the array at least once, and get the total of each category first
//then you concat, and return concat 

//let assume you have an object of categories with numbers 
//use object keys to iterate over object
//push to array, then join with " - "

/*
A bookseller has lots of books classified in 26 categories labeled A, B, C, ..., Z. Each book has a code of at least 3 characters. The 1st character of a code is a capital letter which defines the book category.

In the bookseller's stocklist each code is followed by a space and by a positive integer, which indicates the quantity of books of this code in stock.
Task

You will receive the bookseller's stocklist and a list of categories. Your task is to find the total number of books in the bookseller's stocklist, with the category codes in the list of categories. Note: the codes are in the same order in both lists.

Return the result as a string described in the example below, or as a list of pairs (Haskell/Clojure/Racket/Prolog).

If any of the input lists is empty, return an empty string, or an empty array/list (Clojure/Racket/Prolog).
Example

# the bookseller's stocklist:
"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"

# list of categories: 
"A", "B", "C", "W"

# result:
"(A : 20) - (B : 114) - (C : 50) - (W : 0)"

Explanation:

    category A: 20 books (ABART)
    category B: 114 books = 25 (BKWRK) + 89 (BTSQZ)
    category C: 50 books (CDXEF)
    category W: 0 books


*/