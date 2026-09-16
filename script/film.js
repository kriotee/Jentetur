const filmInput = document.getElementById("filmInput");
const sendFilmBtn = document.getElementById("sendFilm");
const filmList = document.getElementById("filmList");

// 1) Send inn filmforslag
sendFilmBtn.addEventListener("click", async () => {
  const title = filmInput.value.trim();
  if (!title) return;

  try {
    await addFilm(title);
    filmInput.value = "";
    await renderFilms(); // oppdater lista etter innsendelse
  } catch (err) {
    console.error("Feil ved lagring:", err);
  }
});

// 2) Hent og vis alle filmer
async function renderFilms() {
  filmList.innerHTML = "";

  try {
    const films = await getAllFilms();
    films.forEach((film) => {
      const li = document.createElement("li");
      li.textContent = film.title;
      filmList.appendChild(li);
    });
  } catch (err) {
    console.error("Feil ved henting:", err);
  }
}

// 3) Hent filmer ved oppstart
renderFilms();
