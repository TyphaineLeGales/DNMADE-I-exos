const gui = new GUI();
const controls = {
  bgColor: "hsl(0, 0%, 100%)",
  textContent: "Test",
};
gui.addColor(controls, `bgColor`).onChange((event) => {
  document
    .querySelectorAll("button")
    .forEach((btn) => (btn.style.backgroundColor = event));
});

let constentUrl = "https://jsonplaceholder.typicode.com/posts";

fetch(constentUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    //filtre
    const tableauUserId = [];

    data.forEach((post) => {
      if (tableauUserId.includes(post.userId)) return;
      tableauUserId.push(post.userId);

      console.log(post.userId);
    });

    const postPerUser = [];

    tableauUserId.forEach((id) => {
      const count = data.filter((post) => post.userId === id).length;
      postPerUser.push({ userId: count });
    });

    //console.log("tableauUserId", tableauUserId);
    //console.log("post per user", postPerUser);

    const longueurTitre = [];

    data.forEach((post) => {
      longueurTitre.push(post.title.length);

      let barre = document.createElement("button");
      barre.innerHTML = post.title;
      document.body.appendChild(barre);
      barre.style.backgroundColor = "#a3cb72";
      barre.style.border = "none";
      barre.style.display = "flex";
      barre.style.justifyContent = "center";
      barre.style.justifyItems = "center";
      barre.style.fontFamily = "cursive";
      barre.style.fontSize = "30px";
      barre.style.color = "#f67280";
      barre.style.margin = "20px";
      barre.style.height = "50px";
      barre.style.width = post.title.length + "%";

      let container = document.querySelector(".container");
      barre.onclick = () => {
        let title = document.createElement("h2");
        title.innerText = post.title;
        container.appendChild(title);

        let user = document.createElement("p");
        user.innerText = "- USER : " + post.userId;
        container.appendChild(user);

        user.style.fontSize = "30px";

        let nombre = document.createElement("p");
        nombre.innerText = "- ID : " + post.id;
        container.appendChild(nombre);
        nombre.style.fontSize = "30px";

        barre.style.backgroundColor = "#f8b195";
        barre.style.width = "0";
        barre.style.height = "0";
        barre.style.fontSize = "0";
        barre.style.marginLeft = "110%";
        barre.style.transitionDuration = "1s";
      };
    });
    console.log(longueurTitre);
  });
