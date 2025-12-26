// Arrays in JavaScript

const skills = ["HTML", "CSS", "JavaScript"];

console.log(skills);
console.log(skills[0]); // first item

skills.push("React");
console.log(skills);

// Objects in JavaScript

const user = {
  name: "Zaran",
  age: 22,
  isDeveloper: true,
  skills: skills
};

console.log(user);
console.log(user.name);
console.log(user.skills);

user.age = 23;
user.skills.push("GitHub");

console.log(user);
