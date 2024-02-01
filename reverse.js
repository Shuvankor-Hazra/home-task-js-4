const sentence = "I am Learning Web Dev.";
// Output-----: .veD beW gninraeL ma I;

// for---of
let reverse = "";
for (const letter of sentence) {
//   console.log(letter);
  reverse = letter + reverse;
}
// console.log(reverse);

// For---
let rev = "";
for(let i = 0; i < sentence.length; i++){
    // console.log(i);
    // console.log(sentence[i]);
    const letter = sentence[i];
    rev = letter + rev;
    // console.log(rev);
}
// console.log(rev);

// shortcut
const reversed = sentence.split("").reverse().join("");
console.log(reversed);






