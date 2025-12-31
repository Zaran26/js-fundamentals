const ageInput = document.getElementById("ageInput");
const button = document.getElementById("checkBtn");
const result = document.getElementById("result");

button.addEventListener("click", function () {
  const age = ageInput.value;

  if (age >= 18) {
    result.textContent = "You are eligible";
  } else {
    result.textContent = "You are not eligible";
  }
});

if (age === "") {
  result.textContent = "Please enter age";
} else if (age >= 18) {
  result.textContent = "You are eligible";
} else {
  result.textContent = "You are not eligible";
}
