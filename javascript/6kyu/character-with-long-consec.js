function longestRepetition(s) {
  let greatestConsecutive = ["",0];
  let stringDelimited = "";
  let arrayDelimited = [];

  let array = s.split("");

  for(let i = 0; i < array.length; i++){
    if(array[i] == array[i+1] && i != array.length - 1) {
      stringDelimited += array[i];
    }
    else{
      stringDelimited +=  array[i];
      arrayDelimited.push(stringDelimited);
      stringDelimited = "";
    }
  }

  for(let element of arrayDelimited){
    if(element.length > greatestConsecutive[1]){
      greatestConsecutive[0] = element[0];
      greatestConsecutive[1] = element.length;
    }
  }

  return greatestConsecutive;
}

//loop over string after splitting
//create string 2
//over each element in string, check if the next element is the same
//if it is the same string2 += element, else string2 += / element
//split string by /
//greatest = ["",0]
// loop over delimited string
//if ele.length greater than greatest[1], greatest[1] is ele.length , greatest [0] is ele


/*

INSTRUCTIONS
function longestRepetition(s) {
  let greatestConsecutive = ["",0];
  let stringDelimited = "";
  let arrayDelimited = [];

  let array = s.split("");

  for(let i = 0; i < array.length; i++){
    if(array[i] == array[i+1] && i != array.length - 1) {
      stringDelimited += array[i];
    }
    else{
      stringDelimited +=  array[i];
      arrayDelimited.push(stringDelimited);
      stringDelimited = "";
    }
  }

  for(let element of arrayDelimited){
    if(element.length > greatestConsecutive[1]){
      greatestConsecutive[0] = element[0];
      greatestConsecutive[1] = element.length;
    }
  }

  return greatestConsecutive;
}

//loop over string after splitting
//create string 2
//over each element in string, check if the next element is the same
//if it is the same string2 += element, else string2 += / element
//split string by /
//greatest = ["",0]
// loop over delimited string
//if ele.length greater than greatest[1], greatest[1] is ele.length , greatest [0] is ele

*/
