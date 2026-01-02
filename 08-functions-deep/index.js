function greet(name) {
  return "Hello " + name;
}

console.log(greet("Zaran"));
console.log(greet("Developer"));

function checkAge(age) {
  if (age >= 18) {
    return "Eligible";
  } else {
    return "Not Eligible";
  }
}

console.log(checkAge(20));
console.log(checkAge(15));

function calculateTotal(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }

  return total;
}

console.log(calculateTotal([10, 20, 30]));
console.log(calculateTotal([5, 5, 5]));


function multiply(a, b) {
  return a * b;
}

console.log(multiply(3, 4));
