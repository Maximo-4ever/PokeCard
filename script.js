console.log("Welcome :D");

const getRandomInit = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

document.addEventListener("DOMContentLoaded", () => {
  random = getRandomInit(1, 600 );
  fetchData(random);
  console.log(random);

});

const fetchData = async (id) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    const pokemon = {
      img: data.sprites.other.dream_world.front_default,
      nombre: data.name,
      hp: data.stats[0].base_stat,
      experiencia: data.base_experience,
      ataque: data.stats[1].base_stat,
      especial: data.stats[3].base_stat,
      defensa: data.stats[2].base_stat,
    };
    pintarCard(pokemon);
  } catch (error) {
    console.log(error);
  }
};

const pintarCard = (pokemon) => {
  console.log(pokemon);
  const container = document.querySelector(".container");
  const template = document.querySelector("#template-card").content;
  const clone = template.cloneNode(true);
  const fragment = document.createDocumentFragment();

  
  clone.querySelector(".card__body__img").setAttribute("src", pokemon.img);
  clone.querySelector(".card__body__title").innerHTML = `${pokemon.nombre} <span>${pokemon.hp} HP</span>`;
  clone.querySelector(".card__body__text").textContent = pokemon.experiencia + " XP"
  clone.querySelectorAll(".card__footer__social h3")[0].textContent = pokemon.ataque + " ⚔"
  clone.querySelectorAll(".card__footer__social h3")[1].textContent = pokemon.especial + " 💥"
  clone.querySelectorAll(".card__footer__social h3")[2].textContent = pokemon.defensa + " 🛡"
  fragment.appendChild(clone);
  container.appendChild(fragment);

  
  button = document.querySelector(".recargar");
  button.addEventListener("click", _ => {
    location.reload();
  })
};
