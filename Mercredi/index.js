let colorIndex = {
color1: '#fecaca',
color2: '#fed7aa',
color3: '#fef08a',
color4: '#bbf7d0',
color5: '#a5f3fc',
color6: '#bfdbfe',
color7: '#c7d2fe',
color8: '#e9d5ff',
color9: '#fbcfe8',
color10: '#e2e8f0'
}

 const animateBars = () => {
    console.log("animate bar is called")

        gsap.fromTo(".bar", 
            {height: 0}, 
            {
            height: (i, el) => el.dataset.height + "px",
            duration: 1,
            ease: "power3.out",
            stagger: 0.0025
        });
    }

document.addEventListener('DOMContentLoaded', () => {
    // DEFINIR LES VARIABLES DONT J'AI BESOIN
    const controls = {
        animate: animateBars,
        title : "TITRE", 
        bgColor:' #13243a'
    }

    const gui = new GUI();
    gui.add( controls, 'title' ).onChange(event => {
        const titleDiv = document.querySelector("h1")
        titleDiv.innerText = event

    }) ;
     gui.addColor( controls, 'bgColor' ).onChange(event => {
        document.body.style.backgroundColor = event
    }) ;
    gui.add(controls, "animate").name("Animate Bars");
})

const url = "https://jsonplaceholder.typicode.com/posts"
fetch(url)
.then(response => response.json())
.then(data =>{
    shuffleArray(data).forEach(post => {
        const titleLength = post.title.length
        let bar = document.createElement("button")
        bar.dataset.height = titleLength
        bar.classList.add("bar")
        bar.style.height = "0px"
        bar.style.backgroundColor = colorIndex[`color${post.userId}`]
        const container = document.querySelector(".graphContainer")
        container.append(bar)
        bar.onclick = () => {
            const titleDiv = document.querySelector("h3")
            titleDiv.innerText = post.title
        }
        bar.onmouseenter = (e) => {
            animateOnMouseEnter(e.target)
        }
        bar.onmouseleave = (e) => {
            animateOnMouseLeave(e.target)
        }
      
    })
    animateBars()
})


function animateOnMouseEnter(target) {
    gsap.timeline()
        .to(target, {
            scale: 0.5,
            duration: 0.002,
            ease: "power2.out"
        })
        .to(target, {
            scale: 0.9,
            duration: 0.002,
            ease: "bounce.out"
        });
}

function animateOnMouseLeave(target) {
    gsap.timeline()
        .to(target, {
            scale: 0.5,
            duration: 0.0002,
            ease: "bounce.out"
        })
        .to(target, {
            scale: 1,
            duration: 0.0002,
            ease: "power2.out"
        });
}

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}
