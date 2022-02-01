const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach((element) => {
  const liElement = document.createElement("li");
  liElement.classList.add("item");
  liElement.textContent = element;
  document.querySelector("#ingredients").append(liElement);
});
