function rgb(r, g, b) {
    let toHexadeci = value => {
      let hexa = value.toString(16);
      
      if(value < 0){
        hexa = '0';
      }
      if(value > 255){
        hexa = 'ff'
      }
      if(hexa.length < 2){
        return '0' + hexa;
      }
      return hexa
    }
    
    return (toHexadeci(r) + toHexadeci(g) + toHexadeci(b)).toUpperCase();
    
}

//INSTRUCTIONS
// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
// Examples (input --> output):

// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

//another way to add a 0 to the string, is doing 0 + hex value, then .split(-2)
//.split(-2) returns the split string, STARTING from the -2 index