const person = {
    name : "Sodor Uddin",
    age : 25,
    profession : "Developer",
    salary : 25000,
    married : true,
    "fav places" : ["Bandorban", "Saint-Martin", "Rangamati", "Kuakata"]
}

person.salary = 30000;
person["age"] = 30;
person["fav places"] = ["Maldives", "Bali", "Pataya"];
console.log(person);

const propName = "profession";
person[propName] = "Web developer";
console.log(person);