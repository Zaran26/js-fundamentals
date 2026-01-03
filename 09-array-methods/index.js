const numbers = [1, 2, 3, 4];

const doubled = numbers.map(function (num) {
  return num * 2;
});

console.log(doubled);

const ages = [12, 18, 21, 16, 25];

const adults = ages.filter(function (age) {
  return age >= 18;
});

console.log(adults);


const prices = [100, 200, 300];

const total = prices.reduce(function (sum, price) {
  return sum + price;
}, 0);

console.log(total);


const marks = [40, 60, 80];

const passed = marks.filter(function (mark) {
  return mark >= 50;
});

console.log(passed);
