const url = "https://jsonplaceholder.typicode.com/posts"

document.addEventListener("DOMContentLoaded", () => {

    const gui = new GUI();
    const controls = {
        bgColor: "#ffffff",
        textContent: "Ca marche",
        color: "#ffffff"
    }

    gui.addColor(controls, 'bgColor').onChange(event => {
        document.body.style.backgroundColor = event
    })

    gui.add(controls, 'textContent').onChange(event => {
        document.body.style.textContent = event
    })


    gui.addColor(controls, 'color').onChange(event => {
        document.body.style.backgroundColor = event
    })

})





fetch(url)
    .then(response => response.json())
    .then((data) => {
        console.log(data);

        const tableauUserId = []
        data.forEach(post => {
            if (tableauUserId.includes(post.userId)) return
            tableauUserId.push(post.userId)
        });

        const postUser = []
        tableauUserId.forEach(userId => {
            const count = data.filter(post => post.userId === userId).length
            postUser.push({ userId: count })

        })

        const titres = []
        data.forEach(post => {
            titres.push(post.title)
        })


        const lengthTitle = []
        titres.forEach(title => {
            const nombre = title.length
            lengthTitle.push(nombre)
        })

        titres.forEach(titre => {
            let button = document.createElement("button")
            button.style.width = titre.length * 3 + "px"
            button.style.height = 60 + "px"
            if (titre.length > 40) {
                button.classList.add("longtitle")
            }
            button.classList.add("barre")
            document.body.append(button);
            button.onclick = () => {
                console.log(titre)
                document.body.append(titre)
            }

        })

        console.log("tableauUserId", tableauUserId)
        console.log("post par utilisateur", postUser)

    }
    )




