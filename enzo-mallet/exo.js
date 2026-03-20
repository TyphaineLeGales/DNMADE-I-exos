
let count = 0
const btn = document.querySelector(".btn")

const cleanup = () => {
     const div1 = document.querySelector(".div1");

    if (div1.children) {
        console.log(div1.children)
        div1.children[0]?.remove()
    }

    const div2 = document.querySelector(".div2");
    console.log(div2)
    console.log("chilrend before", div2.children)
    div2.removeChild(div2.children[0])
    const div2after = document.querySelector(".div2");
    div2.removeChild(div2after.children[0])

    const div3 = document.querySelector(".div3");
    console.log(div3)
    console.log("chilrend before", div3.children)
    div3.removeChild(div3.children[0])
    const div3after = document.querySelector(".div3");
    div3.removeChild(div3after.children[0])
    div3.removeChild(div3after.children[0])
    div3.removeChild(div3after.children[0])
    div3.removeChild(div3after.children[0])
    div3.removeChild(div3after.children[0])
    div3.removeChild(div3after.children[0])
    div3.removeChild(div3after.children[0])
    div3.removeChild(div3after.children[0])
    div3.removeChild(div3after.children[0])
    div3.removeChild(div3after.children[0])
    div3.removeChild(div3after.children[0])
    div3.removeChild(div3after.children[0])
    div3.removeChild(div3after.children[0])
    div3.removeChild(div3after.children[0])
    div3.removeChild(div3after.children[0])
    div3.removeChild(div3after.children[0])
    div3.removeChild(div3after.children[0])
    div3.removeChild(div3after.children[0])
    div3.removeChild(div3after.children[0])
}

Btn = () => {
    console.log(count)
    count ++ 
    count > 1 && cleanup()

    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            console.log(data.meals[0].strInstructions)
        
            const titre = document.createElement("h1");

            titre.textContent = data.meals[0].strMeal;

            titre.classList.add ("titre")

            const div1 = document.querySelector(".div1");
            div1.appendChild(titre)

            const paragraphe = document.createElement("p");

            paragraphe.textContent = data.meals[0].strInstructions;

            paragraphe.classList.add ("paragraphe")

            const div2 = document.querySelector(".div2");
            div2.appendChild(paragraphe)

            const img = document.createElement("img");

            img.src = data.meals[0].strMealThumb;

            img.classList.add("img")
            div2.appendChild(img)
        
            let tableau = Object.keys(data.meals[0])
            let tableau_filtre = tableau.filter(element => element.includes("Ingredient"))
            tableau_filtre.forEach(key => {
                console.log(data.meals[0][key])
            
                const liste = document.createElement("button")
            
                liste.textContent = data.meals[0][key]

                liste.classList.add ("liste")

            
            const div3 = document.querySelector(".div3");
            div3.appendChild(liste)


            })
        });

    }


const liste = document.createElement("button")

liste.onIngredientClick = (e) => {
    console.log(e)
    // stocker la valeur de l'ingredient selectonner
    //fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=" + )
}


btn.addEventListener("click", Btn)

liste.addEventListener("click", liste.onIngredientClick)
