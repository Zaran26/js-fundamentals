// DOM Selection

const title = document.getElementById("title");
const button = document.getElementById("btn");

console.log(title);
console.log(button);

// DOM Manipulation
button.addEventListener("click", function () {
  title.textContent = "Button Clicked!";
});
