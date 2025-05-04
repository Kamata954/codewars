function persistence(num) {
    //code me
   let count = 0;
   function getCount(number){
     count ++;
     let numArray = number.toString().split("");
     let product = numArray.reduce((accum,char,index)=> {return accum * (+char)}, 1);
     if(product.toString().length > 1){
       getCount(product);
     }
   }
   getCount(num);
   return num.toString().length > 1 ? count : 0;
   
 }
 
 // get number, split number into array by turning into string 
 //loop over every number in the array with reduce? get result
 //add 1 to count
 //if result length > 1, do this again
 //maybe recursion can work for this?
 
 // BIG TAKE AWAY!! SYNTAX FOR REDUCE!!! reduce((a,c)=> {a + c},0 )


//INSTRUCTIONS
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
// 4 --> 0 (because 4 is already a one-digit number, there is no multiplication)

// Fundamentals
