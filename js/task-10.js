function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  input: document.querySelector('[type="number"]'),
  divBoxes: document.querySelector("#boxes"),
};

refs.buttonCreate.addEventListener("click", createBoxes);

function createBoxes(amount) {
  amount = refs.input.value;
  let counter = 30;
  const elements = [];
  for (let i = 0; i < amount; i += 1) {
    let newDiv = document.createElement("div");
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.width = `${counter}px`;
    newDiv.style.height = `${counter}px`;
    counter += 10;
    elements.push(newDiv);
  }
  refs.divBoxes.append(...elements);
}

refs.buttonDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  refs.divBoxes.innerHTML = "";
}
