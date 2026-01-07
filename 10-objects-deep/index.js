const user = {
  name: "Zaran",
  age: 22,
  role: "Frontend Developer"
};

console.log(user.name);
console.log(user.age);


user.age = 23;
user.role = "React Developer";

console.log(user);


const users = [
  { name: "A", age: 20 },
  { name: "B", age: 17 },
  { name: "C", age: 25 }
];

console.log(users);
console.log(users[0].name);


for (let i = 0; i < users.length; i++) {
  console.log(users[i].name);
}


const products = [
  { name: "Phone", price: 500 },
  { name: "Laptop", price: 1000 },
  { name: "Tablet", price: 300 }
];

for (let i = 0; i < products.length; i++) {
  console.log(products[i].name, products[i].price);
}
