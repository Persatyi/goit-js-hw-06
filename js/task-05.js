const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", () => {
  if (textInput.value.trim() === "") {
    textOutput.textContent = "Anonymous";
    return;
  }
  textOutput.textContent = textInput.value;
});
