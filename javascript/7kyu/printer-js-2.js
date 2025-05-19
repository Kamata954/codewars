function printerError(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let alphabetObj = {}
    let count = 0

    alphabet.split("").forEach((x,index) => {
      alphabetObj[x] = index
    })

    s.split("").forEach((letter,index) => {
      if(alphabetObj[letter] > 12){
        count++
      }
    })

  return `${count}/${s.length}`
}
