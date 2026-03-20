console.log("x");

let corps;
let ingredient;
let ingredients = [];
let contenu__ingr;
const recette = document.createElement("button");
const newContent = document.createTextNode("recettes aléatoires");
recette.appendChild(newContent);
recette.style.height = "50px";
recette.style.fontSize = "20px";
recette.style.backgroundColor = "#ae7e5b";
recette.style.borderRadius = "50px";
recette.style.padding = "10px 20px 10px 20px";
const currentDiv = document.getElementById("div1");
document.body.insertBefore(recette, currentDiv);

const title = document.createElement("div");
const image = document.createElement("img");
const inst = document.createElement("div");
const ingr = document.createElement("button");
fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  .then((response) => response.json())
  .then((data) => {
    const contain = document.createTextNode(data.meals[0].strMeal);
    title.appendChild(contain);

    title.style.fontSize = "50px";
    title.style.color = "#432b19";
    title.style.display = "none";

    const divtitle = document.getElementById("div2");
    document.body.insertBefore(title, divtitle);
    image.src = data.meals[0].strMealThumb;

    image.style.height = "200px";
    image.style.width = "200px";
    image.style.display = "none";
    image.style.marginRight = "50px";
    corps.appendChild(image);
    const divimage = document.getElementById("div2");
    document.body.insertBefore(corps, divimage);

    const divinst = document.getElementById("div6");
    document.body.insertBefore(title, divinst);
    const inst__contain = document.createTextNode(
      data.meals[0].strInstructions,
    );
    console.log(inst__contain);
    inst.style.width = "50vw";
    inst.appendChild(inst__contain);
    corps.appendChild(inst);
    const divconst = document.getElementById("div4");
    document.body.insertBefore(corps, divconst);

    let tableau = Object.keys(data.meals[0]);
    let tableau__filter = tableau.filter((element) =>
      element.includes("Ingredient"),
    );
    tableau__filter.forEach((key) => {
      const button = document.createTextNode(data.meals[0][key]);
      ingr.appendChild(contenu);

      const list = document.getElementById("div9");
      contenu__ingr.appendChild(ingr);
      document.body.insertBefore(ingr, list);
      ingredient += contenu;
    });
  });

onClickbtn = () => {
  console.log("oui");
  recette.style.display = "none";
  document.body.style.backgroundColor = "#d3b39c";
  title.style.display = "flex";
  image.style.display = "flex";
  corps.style.display = "flex";
  contenu__ingr.style.display = "flex";
};

const displaySuggestions = (data) => {
  const meals = data.meals.forEach((element) => {
    const title__meals = element.meals;
  });
};

fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
  .then((response) => response.json())
  .then((data) => console.log("c"));

const onDomLoaded = () => {
  corps = document.querySelector("#corps");
  console.log(corps);
  corps.style.height = "100vh";

  corps.style.display = "none";
  corps.style.margin = "70px 1px 100px 1px";
  contenu__ingr = document.querySelector("#contenu__ingr");
  console.log(contenu__ingr);
  contenu__ingr.style.backgroundColor = "red";
  contenu__ingr.style.height = "50px";
  contenu__ingr.style.width = "100vw";
  contenu__ingr.style.display = "none";
  //   corps.appendChild(image);
  //   document.body.insertBefore(corps);
  recette.addEventListener("click", onClickbtn);
};

document.addEventListener("DOMContentLoaded", onDomLoaded);
