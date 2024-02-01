const person = {
    name : "Sodor Uddin",
    age : 25,
    profession : "Developer",
    salary : 25000,
    married : true,
    "fav place" : ["Bandorban", "Saint-Martin", "Rangamati", "Kuakata"]
}
// console.log(person);

// ----dot notation----
// console.log(person.profession);
const income = person.salary;
// console.log(income);

// bracket notation
// console.log(person["age"]);
const boyos = person["age"];
console.log(boyos);

// console.log(person."fav place"); // dot-notation use kors jassa na, bracket-notation use korta hoba.
console.log(person["fav place"]);

const keyName = "profession";
console.log(person[keyName]);
