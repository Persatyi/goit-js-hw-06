const ulCategories = document.querySelector("#categories");
const elementList = ulCategories.children;
console.log("Number of categories:", elementList.length);

const liElements = document.querySelectorAll(".item");
liElements.forEach((element) => {
  const title = element.querySelector("h2").textContent;
  const numberOfNested = element.querySelectorAll("li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${numberOfNested}`);
});
