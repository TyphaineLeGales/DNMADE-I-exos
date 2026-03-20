let selectedIngredients = null

fetch("https://www.themealdb.com/api/json/v1/1/random.php")
.then(res => res.json())
.then(data => {
    displayRandomRecipe(data.meals[0])
})

const displayRandomRecipe = (data) => {
    const recipeContainer = document.querySelector('.container')
    const suggestionContainer = document.querySelector('.suggestions')
    // get data
    const title = data["strMeal"]
    const instructions = data["strInstructions"]
    const ingredients = Object.keys(data).filter(e => e.includes("Ingredient"))
    ingredients.forEach(key => {
        if(!data[key]) return // ne pas créer un bouton si jamais le champ est vide
        
        const button = document.createElement('button')
        button.innerText = data[key]

 
        button.onclick = (e) => {
            console.log(e.target.innerText)
            selectedIngredients = e.target.innerText
            fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=" + selectedIngredients)
            .then(response => response.json())
            .then(data => integrateSuggestions(data))
        }
        suggestionContainer.append(button)
    })

    // create DOM elements
    const h2 = document.createElement("h2")
    h2.innerText = title
    recipeContainer.append(h2)

    const p = document.createElement("p")
    p.innerText = instructions
    recipeContainer.append(p)
}

const integrateSuggestions = (data) => {
    // afficher que les 3 premiers resultats
    const displayMeals = data.meals.slice(0, 3)
    displayMeals.forEach(element => {
        const title = element.strMeal
        const img = element.strMealThumb
        const suggestionContainer = document.querySelector('.suggestions')
        const suggestionWrapper = document.createElement("div")
        suggestionWrapper.classList.add('suggestion')
        const h3 = document.createElement("h3")
        h3.innerText = title
        suggestionWrapper.append(h3)
        const imgSuggestion = document.createElement("img")
        imgSuggestion.src = img
        suggestionWrapper.append(imgSuggestion)
        suggestionContainer.append(suggestionWrapper)
    })


}