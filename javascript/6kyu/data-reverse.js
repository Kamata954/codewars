function dataReverse(data) {
  let array = [];
  data.forEach((x,i) => {
    array.push(data[i]);
    if(i % 8 == 7 && i > 1 && i < data.length){
      array.push("/");
    }
  })
  
  let num = array.join("").split("/").reverse().join("").split("")
  return num.map(x => +x)
}

/*
INSTRUCTIONS

A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)

should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)

The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.
Arrays
Fundamentals

*/