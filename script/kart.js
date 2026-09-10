const tantesHus = document.querySelector("#tantes-hus");
const hytta = document.querySelector("#hytta");
const lillehytta = document.querySelector("#lillehytta");
const info = document.querySelector("info");

const showPlanViewTantesHus = () => {
  if (tantesHus.src.includes("Tantes-hus.svg")) {
    tantesHus.src = "./image/husplan.svg";
    tantesHus.style.width = "180px";
    tantesHus.style.top = "74%";
    tantesHus.style.height = "auto";
  } else {
    tantesHus.src = "./image/Tantes-hus.svg";
    tantesHus.style.width = "200px";
    tantesHus.style.top = "78%";
    tantesHus.style.height = "auto";
  }
};

tantesHus.addEventListener("click", showPlanViewTantesHus);

const showPlanViewHytta = () => {
  if (hytta.src.includes("Hytta.svg")) {
    hytta.src = "./image/hytteplan.svg";
    hytta.style.width = "110px";
  } else {
    hytta.src = "./image/Hytta.svg";
    hytta.style.width = "130px";
  }
};

hytta.addEventListener("click", showPlanViewHytta);

const showPlanViewLillehytta = () => {
  if (lillehytta.src.includes("Lillehytta.svg")) {
    lillehytta.src = "./image/lillehyttaplan.svg";
    lillehytta.style.width = "80px";
    lillehytta.style.height = "auto";
  } else {
    lillehytta.src = "./image/Lillehytta.svg";
    lillehytta.style.width = "90px";
    lillehytta.style.height = "auto";
  }
};

lillehytta.addEventListener("click", showPlanViewLillehytta);
