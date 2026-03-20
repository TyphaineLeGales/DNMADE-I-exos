
let selection = "";
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then((data) => {
    console.log(data)
    
    const tableauUserId = []
    
    data.forEach(post => {
        if (tableauUserId.includes(post.userId)) return
        tableauUserId.push(post.userId)
        
    });
    
    const postPerUser = []
    
    tableauUserId.forEach(userId => {
        const count = data.filter(post => post.userId === userId).length
        postPerUser.push({userId: count})
    })
    
    
    console.log("tableauUserId", tableauUserId)
    console.log("post per user", postPerUser)
    

data.forEach(post => {
    const titlelenght = post.title.length
    let bar = document.createElement("button")
    bar.classList.add("bar")
    bar.style.width = (titlelenght * 6) + "px"
    document.body.append(bar)
   // let txt = document.createElement("p")
   // bar.append(txt)

    bar.onclick = () => {
        console.log("selection beginning", selection)
        console.log("current", bar)
       if(selection && selection !== bar) {
            selection.innerText = ""
        }
        console.log("post title", post.title)
        selection = bar
        bar.innerText = post.title
        console.log("selection end", selection)


    }
})
    
    
})
