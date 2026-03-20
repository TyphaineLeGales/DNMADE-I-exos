fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => {
    console.log(data)

    data.forEach(post => console.log(post.userId));

    const postPerUser = []

    postPerUser.forEach(user => createDataViz(user))

    const tableauUserId = []
    data.forEach(post => {
        if(tableauUserId.includes(postUserId)) return
        tableauUserId.push(post.userId)
    })

    tableauUserId.forEach(userId => {
        const count = data.filter(post => post.userId === userId).lenght
        postPerUser.push({userId: count})
    })

    constLongueurDesTitress = []
    data.forEach(post => {

    })

    div.style.width = longueur + "px"
})

console.log("tableauUserId", tableauUserId)
console.log("post per user", postPerUser)

longueur

const createDataViz = (user) => {

}