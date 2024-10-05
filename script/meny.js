import MenyModule from "./moduls/MenyModule.js";

const fridayProgramContainer = document.querySelector(
  "#friday-program-container"
);
const saturdayProgramContainer = document.querySelector(
  "#saturday-program-container"
);
const sundayProgramContainer = document.querySelector(
  "#sunday-program-container"
);

const showMeny = (() => {
  const menyListe = MenyModule;
  const meals = menyListe.getAll();
  let htmlTxtFriday = "";
  let htmlTxtSaturday = "";
  let htmlTxtSunday = "";

  meals.forEach((meal) => {
    let htmlTxt = `
        <article class="meny-item" >
        <p><strong>${meal.type}</strong></p>
        <p>${meal.food}</p>
        </article>`;

    if (meal.day == "friday") {
      htmlTxtFriday += htmlTxt;
      fridayProgramContainer.innerHTML += htmlTxt;
    } else if (meal.day == "saturday") {
      htmlTxtSaturday += htmlTxt;
      saturdayProgramContainer.innerHTML += htmlTxt;
    } else if (meal.day == "sunday") {
      htmlTxtSunday += htmlTxt;
      sundayProgramContainer.innerHTML += htmlTxt;
    }
  });
})();
