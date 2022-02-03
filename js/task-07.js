const fontSizeControl = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");

fontSizeControl.addEventListener("input", () => {
  const fontSizeControlValue = fontSizeControl.value;
  textElement.style.fontSize = `${fontSizeControlValue}px`;
});
