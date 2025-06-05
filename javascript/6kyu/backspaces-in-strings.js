function cleanString(s) {
  let finishedArray = [];

  s.split("").forEach(x => x == "#" ? finishedArray.pop() : finishedArray.push(x));
  return finishedArray.join("");
}

/*
INSTRUCTIONS
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.
Examples

"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""


*/
