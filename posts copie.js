

const gui = new GUI();
const controls = {
    bgColor : "#ffffff"
    
}

gui.addColor(controls, "bgColor").onChange(event=>{
    document.body.style.backgroundColor = event
})


fetch("https://jsonplaceholder.typicode.com/posts")
.then(reponse => reponse.json())
.then((data) =>{

    console.log(data);

    const tableauUserId = []
    data.forEach(post => {
        if(tableauUserId.includes(post.userId)) return
        tableauUserId.push(post.userId)
        
    })

    const postPerUser = []
    tableauUserId.forEach(userId => {
        const count = data.filter(post => post.userId === userId).length
        postPerUser.push({userId: count})
    })


    const longeurDesTitres = []
    const titre = []

    data.forEach ((post) => {

        const longeurDesTitres = post.title.length
        let button = document.createElement("button");
        button.className = "btn";
        button.style.height = longeurDesTitres + "vh";
        button.style.width = "50px";
        button.style.margin = "1px 5px 45px 5px";
 
        document.body.append(button)

        let titre = document.createElement("div");
 
      titre.id = "btn" + post.id;
      titre.style.color = "#fede00";
      titre.style.fontSize = "15px";

        button.onclick = () => {
            console.log(titre)
            titre.append(post.title) ;
            button.append(titre) ;

        }

        
 
    })

    gsap.to('.btn', {
	scrollTrigger: '.box', 
});



    console.log("tableauUserId", tableauUserId)
    console.log("post per user", postPerUser)
    console.log('longeur titres', longeurDesTitres)


});