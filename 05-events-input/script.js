const input = document.getElementById("textInput");
const button = document.getElementById("btn");
const output = document.getElementById("output");

button.addEventListener("click", function () {
  const value = input.value;
  output.textContent = value;
});
