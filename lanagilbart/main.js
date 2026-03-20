// Quand l'utilisateur change la couleur dans le input, on applique au body
document.getElementById('bgPicker').addEventListener('input', function(e) {
  document.body.style.backgroundColor = e.target.value;
});

let tableauUserID = [];
let selectedDiv = null; // garde en mémoire quelle barre est actuellement sélectionnée

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function(res) { return res.json(); })
  .then(function(data) {

    // ── 1. EXTRAIRE LES IDs UTILISATEURS UNIQUES ──────────────────────────────
    // On parcourt tous les posts, et si l'userId n'est pas encore dans le tableau,
    // on l'ajoute. Le "return" sert à ignorer les doublons.
    data.forEach(function(post) {
      if (tableauUserID.includes(post.userId)) return;
      tableauUserID.push(post.userId);
    });
    console.log(tableauUserID);

    // ── 2. COMPTER LES POSTS PAR UTILISATEUR ──────────────────────────────────
    // Pour chaque userId, on filtre tous les posts qui lui appartiennent
    // et on compte combien il y en a avec .length
    const PostPeruser = [];
    tableauUserID.forEach(function(userId) {
      const count = data.filter(function(post) { return post.userId === userId; }).length;
      PostPeruser.push({ [userId]: count }); // [userId] entre crochets = clé dynamique
    });
    console.log(PostPeruser);

    // ── 3. LONGUEUR DES TITRES ─────────────────────────────────────────────────
    const longueurdestitres = [];
    data.forEach(function(post) {
      longueurdestitres.push(post.title.length); // .length sur une string = nombre de caractères
    });
    console.log(longueurdestitres);

    // ── 4. CRÉER UNE BARRE PAR POST ───────────────────────────────────────────
    data.forEach(function(post) {
      let div = document.createElement("div");
      div.className = "bar";
      // La largeur de la barre = longueur du titre × 10 pixels
      div.style.width = post.title.length * 10 + "px";

      // ── 5. HOVER ──────────────────────────────────────────────────────────────
      // mouseenter = quand la souris entre sur l'élément
      // On ignore si c'est la barre déjà sélectionnée (elle a déjà sa couleur)
      div.addEventListener("mouseenter", function() {
        if (div === selectedDiv) return;
        div.style.backgroundColor = "#d486d4";
        div.style.transform = "scaleX(1.03)"; // agrandit légèrement la barre
        div.style.transformOrigin = "left";   // l'agrandissement part de la gauche
      });

      // mouseleave = quand la souris quitte l'élément
      div.addEventListener("mouseleave", function() {
        if (div === selectedDiv) return;
        div.style.backgroundColor = "#ffd1ff";
        div.style.transform = "scaleX(1)"; // remet à la taille normale
      });

      // ── 6. CLIC ───────────────────────────────────────────────────────────────
      div.onclick = function() {

        // Re-clic sur la même barre = on déselectionne tout
        if (div === selectedDiv) {
          div.classList.remove("selected");
          div.style.backgroundColor = "#ffd1ff";
          div.style.transform = "scaleX(1)";
          let oldP = div.querySelector("p"); // cherche le <p> à l'intérieur de la barre
          if (oldP) oldP.remove();
          selectedDiv = null;
          document.getElementById("detail").innerHTML = '<p id="detail-placeholder">Clique sur une barre pour voir le post</p>';
          return; // on arrête la fonction ici
        }

        // Si une autre barre était déjà sélectionnée, on la remet à son état initial
        if (selectedDiv) {
          selectedDiv.classList.remove("selected");
          selectedDiv.style.backgroundColor = "#ffd1ff";
          selectedDiv.style.transform = "scaleX(1)";
          let oldP = selectedDiv.querySelector("p");
          if (oldP) oldP.remove();
        }

        // On enregistre la nouvelle barre sélectionnée
        selectedDiv = div;
        div.classList.add("selected");

        // On crée un <p> dans la barre avec le titre du post
        let p = document.createElement("p");
        p.textContent = post.title;
        p.style.opacity = "0";
        div.append(p);
        // setTimeout avec 10ms = petit délai pour que la transition CSS fonctionne
        setTimeout(function() { p.style.opacity = "1"; }, 10);

        // ── 7. AFFICHER DANS LE CADRE À DROITE ────────────────────────────────
        // On réécrit le contenu du cadre avec le titre et le body du post
        const detail = document.getElementById("detail");
        detail.innerHTML = '<p id="detail-title">' + post.title + '</p><p id="detail-body">' + post.body + '</p>';

        // On ajoute la classe "visible" après 10ms pour déclencher le fade-in CSS
        setTimeout(function() {
          document.getElementById("detail-title").classList.add("visible");
          document.getElementById("detail-body").classList.add("visible");
        }, 10);
      };

      document.getElementById("bars").appendChild(div);
    });

  });