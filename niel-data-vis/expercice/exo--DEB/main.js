console.log("hihi");

fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.log(data.meals[0].strInstructions);
    const titre = document.createElement("div");
    const content = document.createTextNode(data.meals[0].strMeal);
    titre.appendChild(content);
    const title = document.getElementById("div2");
    document.body.insertBefore(titre, title);

    const inst = document.createElement("div");
    const newContent = document.createTextNode(data.meals[0].strInstructions);
    inst.appendChild(newContent);
    const currentDiv = document.getElementById("div1");
    // const divvvvv = document.getElementsByClassName("txt");
    // divvvvv.style.backgrounsColor = "brown";
    document.body.insertBefore(inst, currentDiv);

    let tableau = Object.keys(data.meals[0]);
    let tableau__filter = tableau.filter((element) =>
      element.includes("Ingredient"),
    );
    tableau__filter.forEach((key) => {
      console.log(data.meals[0][key]);

      const ingr = document.createElement("div");
      const contenu = document.createTextNode(data.meals[0][key]);
      ingr.appendChild(contenu);
      const list = document.getElementById("div3");

      document.body.insertBefore(ingr, list);
    });
  });
// for (let i = 0; data.meals[0].strIngredient != ""; i++) {

// }
