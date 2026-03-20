console.log("oui");

let vari;
let tableauUserID = [];
let user;
let Container;
let poster;

const gui = new GUI();
const controls = {
  bgColor: "#ffffff",
  height: "22px",
};
gui.addColor(controls, "bgColor").onChange((event) => {
  rectangle.style.backgroundColor = event;
});

Container = document.querySelector(".content");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    // tableau += { user: compteur };
    data.forEach((post) => {
      if (tableauUserID.includes(post.userId)) return;
      tableauUserID.push(post.userId);
    });
    console.log(tableauUserID);

    const PostPeruser = [];
    tableauUserID.forEach((userId) => {
      const count = data.filter((post) => post.userId === userId).length;
      PostPeruser.push({ [userId]: count });
    });
    console.log(PostPeruser);

    const Nombrelettre = [];
    data.forEach((post) => {
      Nombrelettre.push(post.title.length);
    });

    Fin = (ex, rectangle, Nombre, publication) => {
      ex.style.display = "none";
      publication.style.display = "none";
      gsap.to(rectangle, {
        duration: 1,
        height: Nombre / 4 + "px",
        width: Nombre / 4 + "px",
        opacity: 1,
      });
    };

    data.forEach((post) => {
      const Nombre = post.body.length;
      const rectangle = document.createElement("button");
      let titre = document.createElement("div");
      let publication = document.createElement("div2");
      poster = document.querySelector(".post");
      gsap.from(rectangle, {
        duration: 2,
        y: -1000,
      });
      titre.id = "print" + post.id;
      titre.style.color = "#000000";
      titre.style.fontSize = "30px";
      titre.style.textTransform = "uppercase";

      rectangle.append(titre);

      rectangle.onclick = () => {
        let ex = document.getElementById("print" + post.id);
        if (rectangle.classList.contains("open")) {
          Fin(ex, rectangle, Nombre, publication);
        } else {
          rectangle.style.backgroundColor = "#9c8f59";
          ex.style.display = "flex";
          publication.append(post.body);
          poster.append(publication);
          publication.style.display = "flex";
          titre.textContent = post.title;

          gsap.to(rectangle, {
            duration: 1,
            height: 400,
            width: 400,
            opacity: 0.7,
          });
        }
        rectangle.classList.toggle("open");
      };

      //   rectangle = document.getElementsByClassName("rec");
      rectangle.style.height = Nombre / 4 + "px";
      rectangle.style.width = Nombre / 4 + "px";

      rectangle.style.margin = "1px 15px 1px 13px";
      rectangle.style.borderRadius = "5px";
      rectangle.className = "rec";
      if (post.body.includes("est")) {
        rectangle.style.background =
          "linear-gradient(rgb(0, 0, 0), rgb(108, 33, 10))";
        titre.style.color = "white";
        console.log(post.body);
      } else {
        rectangle.style.background =
          " linear-gradient(rgb(239, 216, 125), rgb(108, 33, 10))";
      }
      Container.append(rectangle);
    });
  });

// if (data[0] == id) {
//   compteur += 1;
// }
//   );
// };
