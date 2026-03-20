document.addEventListener('DOMContentLoaded', () => {
    const gui = new GUI();
    const controls = {
        bgColor:"white",
        textContent:"Test"
        
    }

    gui.addColor(controls, 'bgColor').onChange(event =>{
                    
        document.querySelectorAll('button').forEach(btn => {
            btn.style.backgroundColor = event
        })
    })

})



fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then((data) =>{
    console.log(data)

    const  titres = []
    data.forEach(post => {
        titres.push(post.title)
    })


    titres.forEach(title =>{
        const count = title.length
         let lesdiv = document.createElement("button");
            lesdiv.style.width = count + "px"
            lesdiv.style.height = 15 +"px"
            lesdiv.classList.add("lesdiv")
            document.body.append(lesdiv);
            console.log("div", lesdiv)

        lesdiv.onclick = (e) =>{
            let info = document.createElement("p");
            info.textContent = title;
            info.classList.add("info")
            document.body.append(info);

            let Hprem = document.querySelector(".titre")
            let cliquer = document.querySelector(".titre2")

                let tl = gsap.timeline({
                    repeat: -1,
                    yoyo: true,
                    onComplete: () => {
                    console.log("la timeline est terminée");
                    },
                });

                tl.to(lesdiv, {
                    x: 'random(-100, 100, 100)',
                    y: 'random(-100, 100, 100)',
                    rotation:"+=360",
                    borderWidth: "+=1",
                    width: "+=10px",
                    height: "+=10px",
                    duration: 1,
                });

                tl.to(info, {
                    x: 'random(-100, 100, 100)',
                    y: 'random(-100, 100, 100)',
                    ease: "sine.inOut",

                    duration: 5,
                });

                tl.to(Hprem, {
                    x: 'random(-100, 100, 100)',
                    y: 'random(-100, 100, 100)',
                    ease: "sine.inOut",

                    duration: 5,
                });   

                tl.to(cliquer, {
                    x: 'random(-100, 100, 100)',
                    y: 'random(-100, 100, 100)',
                    ease: "sine.inOut",

                    duration: 2,
                });              
        }

    })

    console.log("longeurDesTitres", titres)
    
})

