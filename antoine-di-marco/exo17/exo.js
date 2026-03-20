const buttonElement = document.querySelector(".button")
onbuttonclick = () => {
    
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        console.log(data.meals[0].strInstructions)

        document.querySelectorAll("body > :not(.button)").forEach(el => el.remove());
    
        const titre = document.createElement("h1")
        titre.textContent = data.meals[0].strMeal;
        document.body.append(titre);
    
        const paragraphe = document.createElement("p");
        paragraphe.textContent = data.meals[0].strInstructions;
        document.body.append(paragraphe);
    
        let tableau = Object.keys(data.meals[0])
        let tableau_filtre = tableau.filter(element => element.includes("Ingredient"))
        tableau_filtre.forEach(key => {
            console.log(data.meals[0][key])
    
            const liste = document.createElement("ul")
            liste.textContent = data.meals[0][key]
            document.body.append(liste)
        })
    });
}

buttonElement.addEventListener("click", onbuttonclick)
