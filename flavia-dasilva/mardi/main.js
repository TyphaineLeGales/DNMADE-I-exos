fetch(
  "https://www.themealdb.com/api/json/v1/1/search.php?s=Chocolate%20Avocado%20Mousse",
)
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("recipe");

    addElement(data.meals[0].strInstructions, container);
    const div = document.getElementById("ingredient");
    let tableau = Object.keys(data.meals[0]);
    let tableau_filtre = tableau.filter((element) =>
      element.includes("Ingredient"),
    );
    tableau_filtre.forEach((key) => {
      const listes = document.createElement("button");
      listes.textContent = data.meals[0][key];
      if (data.meals[0][key] === "") {
        return;
      }

      listes.addEventListener("click", () => {
        const suggestionDiv = document.getElementById("suggestion");
        const nomDiv = document.getElementById("nom");
        const recetteDiv = document.getElementById("recette");

        suggestionDiv.innerHTML = "";
        nomDiv.innerHTML = "";
        recetteDiv.innerHTML = "";

        const title = document.createElement("h2");
        title.textContent = "Suggestions avec " + data.meals[0][key];
        nomDiv.append(title);

        suggestionDiv.append(nomDiv);

        fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${data.meals[0][key]}`,
        )
          .then((response) => response.json())
          .then((newData) => {
            newData.meals.forEach((meal) => {
              const bloc = document.createElement("div");
              bloc.classList.add("bloc-recette");

              const titre = document.createElement("h3");
              titre.textContent = meal.strMeal;

              const image = document.createElement("img");
              image.src = meal.strMealThumb;

              bloc.append(titre);
              bloc.append(image);

              suggestionDiv.append(recetteDiv);
              recetteDiv.append(bloc);
            });
          });
      });

      div.append(listes);
    });

    console.log(data);
    console.log(data.meals[0].strInstructions);
  });

function addElement(texte, parent) {
  const paragraphe = document.createElement("p");
  paragraphe.textContent = texte;
  parent.append(paragraphe);
}
