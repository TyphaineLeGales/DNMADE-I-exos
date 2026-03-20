document.addEventListener("DOMContentLoaded", () => {
  const gui = new GUI();
  const controls = {
    bgColor: "#ffff",
    textContent: "Test",
  };
  gui.addColor(controls, "bgColor").onChange((event) => {
    document
      .querySelectorAll("button")
      .forEach((btn) => (btn.style.backgroundColor = event));
  });
});

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    //1.récupérer la donnée
    console.log(data);
    //2.filtrer et trier le tableau pour récupérer le nombre de post par user
    const tableauUserId = [];
    data.forEach((post) => {
      if (tableauUserId.includes(post.userId)) return;
      tableauUserId.push(post.userId);
    });
    const postPerUser = [];

    tableauUserId.forEach((userId) => {
      const count = data.filter((post) => post.userId === userId).length;
      postPerUser.push({ userId: count });
    });

    console.log("tableauUserId", tableauUserId);
    console.log("post per user", postPerUser);

    //div par caractère - tableau
    const tableauTitle = [];
    data.forEach((post) => {
      tableauTitle.push(post.title);
    });

    tableauTitle.forEach((title, index) => {
      //créer un élément du dom pour chaque titre
      const contentDiv = document.getElementById("content");
      const titre = document.createElement("button");

      titre.textContent = title.length;
      console.log(title);

      //style
      titre.style.width = "50px";
      titre.style.height = title.length * 10 + "px";
      titre.style.animationDelay = `${index * 0.03}s`;

      //ajoute
      contentDiv.append(titre);

      //bouton
      titre.onclick = (e) => {
        console.log(title);
        document.querySelectorAll("#content button").forEach((btn) => {
          btn.classList.remove("active-btn");
        });
        const texteDiv = document.getElementById("texte");
        texteDiv.innerHTML = "";

        const texte = document.createElement("div");
        texte.textContent = title;

        texte.classList.add("texte-style-degrade");
        titre.classList.add("active-btn");
        texteDiv.append(texte);
      };
    });

    console.log("tableauTitle", tableauTitle);
  });
