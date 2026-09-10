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
    tantesHus.style.top = "78%";
    tantesHus.style.height = "auto";
  }
};

tantesHus.addEventListener("click", showPlanViewTantesHus);

const showPlanViewHytta = () => {
  if (hytta.src.includes("Hytta.svg")) {
    hytta.src = "./image/hytteplan.svg";
    hytta.style.width = "150px";
    hytta.style.left = "35%";
  } else {
    hytta.src = "./image/Hytta.svg";
    hytta.style.width = "130px";
    hytta.style.left = "48%";
  }
};

hytta.addEventListener("click", showPlanViewHytta);

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

lillehytta.addEventListener("click", showPlanViewLillehytta);
