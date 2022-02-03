function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");
const bodyElem = document.body;

btnChangeColor.addEventListener("click", () => {
  const bodyElementColor = (bodyElem.style.backgroundColor =
    getRandomHexColor());
  colorValue.textContent = bodyElementColor;
});
