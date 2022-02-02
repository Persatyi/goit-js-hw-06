const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");

const liItems = ingredients.map((element) => {
  const liElement = document.createElement("li");
  liElement.classList.add("item");
  liElement.textContent = element;
  return liElement;
});

listRef.append(...liItems);
