// task-1--------------
// Access the golden rod color value in output.
const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": "#daa520",
};
const goldenRodColor = colors["golden rod"];
console.log(goldenRodColor);

// task-2--------------
// For this object below add a property named passenger capacity with value 5
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};
car["passenger capacity"] = 5;
console.log(car);

// task-3--------------
// Display the physics marks as output.
const student = {
  name: "Hamim Sakep",
  id: 5421,
  physics: {
    subject: "HSC Physics",
    author: "Shahjahan Tapan",
    marks: 30,
  },
};
let physicsMarks = student.physics.marks;
console.log(physicsMarks);

// task-4--------------
// Count the number of properties.
let student2 = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};
let numberOfProperties = Object.keys(student2).length;
console.log(numberOfProperties);

// task-5--------------
// Loop through an object and print the key-value pairs with their types

let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};
const keys = Object.keys(myObject);
console.log(keys);
for (const key of keys) {
  console.log(key, ":", myObject[key], "|", "Type :", typeof myObject[key]);
}
