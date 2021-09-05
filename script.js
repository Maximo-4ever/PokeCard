const getRandomInit = (e, t) => Math.floor(Math.random() * (t - e)) + e;
document.addEventListener("DOMContentLoaded", () => {
  (random = getRandomInit(1, 600)), fetchData(random);
});
const fetchData = async (e) => {
    try {
      const t = await fetch(`https://pokeapi.co/api/v2/pokemon/${e}`),
        a = await t.json(),
        o = {
          img: a.sprites.other.dream_world.front_default,
          nombre: a.name,
          hp: a.stats[0].base_stat,
          experiencia: a.base_experience,
          ataque: a.stats[1].base_stat,
          especial: a.stats[3].base_stat,
          defensa: a.stats[2].base_stat,
        };
      pintarCard(o);
    } catch (e) {
      console.log(e);
      alert("Parece que ocurrio un error, intentelo de nuevo");
    }
  },
  pintarCard = (e) => {
    const t = document.querySelector(".container"),
      a = document.querySelector("#template-card").content.cloneNode(!0),
      o = document.createDocumentFragment();
    a.querySelector(".card__body__img").setAttribute("src", e.img),
      (a.querySelector(
        ".card__body__title"
      ).innerHTML = `${e.nombre} ${e.hp} HP`),
      (a.querySelector(".card__body__text").textContent =
        e.experiencia + " XP"),
      (a.querySelectorAll(".card__footer__social h3")[0].textContent =
        e.ataque + " ⚔"),
      (a.querySelectorAll(".card__footer__social h3")[1].textContent =
        e.especial + " 💥"),
      (a.querySelectorAll(".card__footer__social h3")[2].textContent =
        e.defensa + " 🛡"),
      o.appendChild(a),
      t.appendChild(o),
      (button = document.querySelector(".recargar")),
      button.addEventListener("click", () => {
        location.reload();
      });
    VanillaTilt.init(document.querySelector(".card"), {
      max: 20,
      speed: 3400,
    });
    setInterval(() => {
      const contentLoaded = document.querySelector(".content-loaded").classList.add("toggle");
      const loader = document.querySelector(".loader").classList.add("toggle");
    }, 500);
  };
