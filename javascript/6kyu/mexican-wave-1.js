function wave(str){
    let waveArr = [];
    let arr = str.split("");
    for(let index = 0; index < arr.length; index++){
      if(arr[index] === " "){
        continue;
      }
      let wave = arr;
      wave[index] = wave[index].toUpperCase();
      waveArr.push(wave.join(""));
      wave[index] = wave[index].toLowerCase();
    }
    
    return waveArr;
  }
  
  
//split string, loop through each letter of string 
//make each letter from 0 to word length upper case 
//let the str with that one upper case letter to a new value
//push the entire word to an array