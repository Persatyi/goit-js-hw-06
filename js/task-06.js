const textInput = document.querySelector("#validation-input");

const textInputData = Number(textInput.dataset.length);

textInput.addEventListener("blur", () => {
  const textInputContentLength = textInput.value.length;
  if (textInputContentLength !== textInputData) {
    replaceClasses("invalid", "valid");
    return;
  }
  replaceClasses("valid", "invalid");
});

const replaceClasses = (classToAdd, classToRemove) => {
  textInput.classList.remove(classToRemove);
  textInput.classList.add(classToAdd);
};
