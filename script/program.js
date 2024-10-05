import ProgramModule from "./moduls/ProgramModule.js";

const fridayProgramContainer = document.querySelector(
  "#friday-program-container"
);
const saturdayProgramContainer = document.querySelector(
  "#saturday-program-container"
);
const sundayProgramContainer = document.querySelector(
  "#sunday-program-container"
);

const showProgram = (() => {
  const programListe = ProgramModule;
  const activities = programListe.getAll();
  let htmlTxtFriday = "";
  let htmlTxtSaturday = "";
  let htmlTxtSunday = "";

  activities.forEach((activity) => {
    let htmlTxt = `
        <article class="program-item" >
        <p><strong>${activity.time}</strong></p>
        <p>${activity.activity}</p>
        </article>`;

    if (activity.day == "friday") {
      htmlTxtFriday += htmlTxt;
      fridayProgramContainer.innerHTML += htmlTxt;
    } else if (activity.day == "saturday") {
      htmlTxtSaturday += htmlTxt;
      saturdayProgramContainer.innerHTML += htmlTxt;
    } else if (activity.day == "sunday") {
      htmlTxtSunday += htmlTxt;
      sundayProgramContainer.innerHTML += htmlTxt;
    }
  });
})();
