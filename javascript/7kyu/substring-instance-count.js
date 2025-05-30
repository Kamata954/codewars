function solution(fullText, search) {
  let newString = fullText.split(search).join("");
  return (fullText.length - newString.length) / search.length
}

//funny method
//split using search, then rejoin array
//difference of fulltext lenght and new array length
// difference / length of search

//clever way to do it ?
//thin about cutting 5 times, that  would leave you with 6 pieces right?
//so to determine how many instances, just minus the pieces by one, that will determine
//the number of cuts, i.e. the number of intances

/*
Write a function that takes two string parameters search_text and full_text and returns the number of times the search_text is found within the full_text.

    Overlap is not permitted: "aaa" contains 1 instance of "aa", not 2.
    search_text will never be empty.

Examples:

full_text = "aa_bb_cc_dd_bb_e", search_text = "bb"
--> should return 2 since "bb" shows up twice


full_text = "aaabbbcccc", search_text = "bbb"
--> should return 1


*/
