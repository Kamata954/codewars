// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

//My code 

function findNeedle(haystack) {
    let msg = ''
    haystack.forEach( (x,y) => {
        if (x === 'needle') {
           msg = `found the needle at position ${y}`
        }
      } )
    return msg
}