const tantesHus = document.querySelector("#tantes-hus");
const hytta = document.querySelector("#hytta");
const lillehytta = document.querySelector("#lillehytta");
const info = document.querySelector("info");

const showPlanViewTantesHus = () => {
  if (tantesHus.src.includes("Tantes-hus.svg")) {
    tantesHus.src = "./image/husplan.png";
    tantesHus.style.width = "240px";
    tantesHus.style.top = "68%";
    tantesHus.style.height = "auto";
  } else {
    tantesHus.src = "./image/Tantes-hus.svg";
    tantesHus.style.width = "200px";
    tantesHus.style.top = "76%";
    tantesHus.style.height = "auto";
  }
};

const showPlanViewTantesHusToggle = () => {
  tantesHus.classList.toggle("plan-view");
};

tantesHus.addEventListener("click", showPlanViewTantesHusToggle);

const showPlanViewHytta = () => {
  if (hytta.src.includes("Hytta.svg")) {
    hytta.src = "./image/hytteplan.png";
    hytta.style.width = "150px";
    hytta.style.left = "35%";
  } else {
    hytta.src = "./image/Hytta.svg";
    hytta.style.width = "130px";
    hytta.style.left = "48%";
  }
};

const showPlanViewHyttaToggle = () => {
  hytta.classList.toggle("plan-view");
};

hytta.addEventListener("click", showPlanViewHyttaToggle);

const showPlanViewLillehytta = () => {
  if (lillehytta.src.includes("Lillehytta.svg")) {
    lillehytta.src = "./image/lillehyttaplan.png";
    lillehytta.style.width = "120px";
    lillehytta.style.height = "auto";
    lillehytta.style.top = "26%";
    lillehytta.style.left = "54%";
  } else {
    lillehytta.src = "./image/Lillehytta.svg";
    lillehytta.style.width = "90px";
    lillehytta.style.height = "auto";
    lillehytta.style.top = "32%";
    lillehytta.style.left = "64%";
  }
};

const showPlanViewLilleHyttaToggle = () => {
  lillehytta.classList.toggle("plan-view");
};

lillehytta.addEventListener("click", showPlanViewLilleHyttaToggle);
