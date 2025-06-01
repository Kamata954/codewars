function checkExam(array1, array2) {
 let sum = 0

 for(let i = 0; i < array2.length; i++){
   if(!array2[i]){
     continue
   }
   if(array2[i] == array1[i]){
     sum += 4
   }
   if(array2[i] != array1[i]){
     sum -= 1
   }
 }

  return sum < 0 ? 0 : sum
}


//initialize sum to 0
// for loop for length of array 2
// if statements checking whether they are equal or not
//first if statement should check if element from array 2 is empty, continue
// second if state is if they are equal, add 4 to sum
// third if is if they are not equal, - 1 from sum
//exit loop check if sum is less than 0, return 0 else return sum

/*
INSTRUCTIONS

The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

    Correct answer    |    Student's answer   |   Result
 ---------------------|-----------------------|-----------
 ["a", "a", "b", "b"]   ["a", "c", "b", "d"]  →     6
 ["a", "a", "c", "b"]   ["a", "a", "b", "" ]  →     7
 ["a", "a", "b", "c"]   ["a", "a", "b", "c"]  →     16
 ["b", "c", "b", "a"]   ["" , "a", "a", "c"]  →     0

Fundamentals
Arrays

*/
