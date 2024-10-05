const tantesHus = document.querySelector("#tantes-hus");
const hytta = document.querySelector("#hytta");
const lillehytta = document.querySelector("#lillehytta");
const info = document.querySelector("info");

const showPlanViewTantesHus = () => {
  if (tantesHus.src.includes("tantes-hus.png")) {
    tantesHus.src = "/image/tantes-hus-plan.png";
    tantesHus.style.width = "120px";
    tantesHus.style.height = "auto";
  } else {
    tantesHus.src = "/image/tantes-hus.png";
    tantesHus.style.width = "70px";
    tantesHus.style.height = "auto";
  }
};

tantesHus.addEventListener("click", showPlanViewTantesHus);

const showPlanViewHytta = () => {
  if (hytta.src.includes("hytta.png")) {
    hytta.src = "/image/hytta-plan.png";
    hytta.style.width = "80px";
  } else {
    hytta.src = "/image/hytta.png";
    hytta.style.width = "60px";
  }
};

hytta.addEventListener("click", showPlanViewHytta);

const showPlanViewLillehytta = () => {
  if (lillehytta.src.includes("lillehytta.png")) {
    lillehytta.src = "/image/lillehytta-plan.png";
    lillehytta.style.width = "70px";
    lillehyttastyle.height = "auto";
  } else {
    lillehytta.src = "/image/lillehytta.png";
    lillehytta.style.width = "40px";
    lillehyttastyle.height = "auto";
  }
};

lillehytta.addEventListener("click", showPlanViewLillehytta);
