const filmInput = document.getElementById("filmInput");
const sendFilmBtn = document.getElementById("sendFilm");
const filmList = document.getElementById("filmList");
const mainBtn = document.getElementById("main-btn");
const wheelFortune = document.getElementById("wheel-fortune");

let films = [];

(async () => {
  films = await getAllFilms();
})();

// 1) Send inn filmforslag
sendFilmBtn.addEventListener("click", async () => {
  const title = filmInput.value.trim();
  if (!title) return;

  try {
    await addFilm(title);
    filmInput.value = "";
    //await renderFilms(); // oppdater lista etter innsendelse
    films = await getAllFilms();
  } catch (err) {
    console.error("Feil ved lagring:", err);
  }
});

// 2) Hent og vis alle filmer
async function renderFilms() {
  filmList.innerHTML = "";

  try {
    const films = await getAllFilms();
    //films.forEach((film) => {
    //const li = document.createElement("li");
    //li.textContent = film.title;
    //filmList.appendChild(li);
    //});
    if (films.length === 0) {
      filmList.textContent = "Ingen filmer funnet!";
      return;
    }
  } catch (err) {
    console.error("Feil ved henting:", err);
  }
}

function getRandomFilm() {
  if (films.length === 0) return null;
  const index = Math.floor(Math.random() * films.length);
  return films[index].title;
}

const spinnWheel = () => {
  filmList.textContent = "...trommevirvel...";

  const randomRotation = 360 * 3 + Math.floor(Math.random() * 360);
  wheelFortune.style.transform = `rotate(${randomRotation}deg)`;
  console.log(randomRotation);
};

function showTxt() {
  filmList.textContent = "...trommevirvel...";
}

function resultAfterSpinn() {
  wheelFortune.addEventListener(
    "transitionend",
    () => {
      const film = getRandomFilm();
      filmList.textContent = film ? film : "Ingen filmer funnet!";
      console.log(film);
    },
    { once: true },
  );
}

mainBtn.addEventListener("click", async () => {
  renderFilms();
  showTxt();
  spinnWheel();
  resultAfterSpinn();
});

// 3) Hent filmer ved oppstart
//renderFilms();
