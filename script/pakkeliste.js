import PakkeListeModule from "./moduls/PakkeListeModule.js";
import AddItemModule from "./moduls/AddItemModule.js";

var listContainer = document.querySelector("#list-container");
const userInput = document.querySelector("#input-user-pakkeliste");
const saveItemBtn = document.querySelector("#btn-add-to-list");
const deletAllBtn = document.querySelector("#delete-all-icon");
const deleteLastItemBtn = document.querySelector("#delete-last-icon");
const checkBox = document.querySelector(".checkboxes");

const showList = () => {
  const pakkeListe = PakkeListeModule;
  const itmes = pakkeListe.getAll();
  let htmlTxt = "";

  itmes.forEach((item, index) => {
    const isChecked =
      JSON.parse(localStorage.getItem(`checkbox-${index}`)) || false;
    const textDecoration = isChecked ? "line-through" : "none";

    htmlTxt += `
        <article class="check-item" >
        <input type="checkbox" class="checkboxes" data-id="${index}" ${
      isChecked ? "checked" : ""
    }>
          <p style="text-decoration: ${textDecoration};">${item.item}</p>
        </article>`;
  });

  listContainer.innerHTML += htmlTxt;
  addCheckBoxListeners();
};

const saveItem = () => {
  const newItem = userInput.value.trim();

  if (newItem) {
    AddItemModule.addItem(newItem);
  }

  userInput.value = "Legg til i pakkeliste";

  showLastItem();
};

// Funksjon for å vise kun det siste elementet når brukeren legger til noe
const showLastItem = () => {
  const allItems = JSON.parse(localStorage.getItem("newItems")) || [];
  const lastItem = allItems[allItems.length - 1]; // Hent siste element

  if (lastItem) {
    const htmlTxt = `
      <article class="check-item">
        <input type="checkbox" class="checkboxes">
        <p>${lastItem.item}</p>
      </article>
    `;

    // Legg til det siste elementet i listen (append til eksisterende innhold)
    listContainer.innerHTML += htmlTxt;
    addCheckBoxListeners();
  }
};

const showItems = () => {
  const newItems = JSON.parse(localStorage.getItem("newItems")) || [];
  console.log(newItems);
  let htmlTxt = "";

  newItems.forEach((newItem) => {
    htmlTxt += `
     <article class="check-item" >
        <div class="checkboxes"></div>
        <p>${newItem.item}</p>
        </article>
    `;
  });

  listContainer.innerHTML += htmlTxt;
  addCheckBoxListeners();
};

saveItemBtn.addEventListener("click", saveItem);

// Når brukeren fokuserer på input-feltet, fjern placeholder-teksten
userInput.addEventListener("focus", () => {
  if (userInput.value === "Legg til i pakkeliste") {
    userInput.value = "";
  }
});

const clearLocalStorage = () => {
  let allItems = JSON.parse(localStorage.getItem("newItems")) || [];
  if (allItems.length > 0) {
    // Fjern det siste elementet
    localStorage.clear("newItems");
    listContainer.innerHTML = ""; // Tømmer eksisterende liste i UI
    showList();
  } else {
    console.log("Listen er tom, ingenting å fjerne.");
  }
};

//deletAllBtn.addEventListener("click", clearLocalStorage);

const deleteLastItem = () => {
  let allItems = JSON.parse(localStorage.getItem("newItems")) || [];

  // Sjekk om det finnes elementer i listen
  if (allItems.length > 0) {
    // Fjern det siste elementet
    allItems.pop();

    // Lagre den oppdaterte listen tilbake i localStorage
    localStorage.setItem("newItems", JSON.stringify(allItems));

    // Tøm listContainer og vis den oppdaterte listen
    listContainer.innerHTML = ""; // Tømmer eksisterende liste i UI
    // Viser den oppdaterte listen
    showList();
    showItems();
  } else {
    console.log("Listen er tom, ingenting å fjerne.");
  }
};

deleteLastItemBtn.addEventListener("click", deleteLastItem);

const addCheckBoxListeners = () => {
  const checkBoxes = document.querySelectorAll(".checkboxes");
  console.log("Inne i addCheckBoxListeners");

  checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener("click", (event) => {
      console.log("Inne i EventLisntener");
      const checkBox = event.target;
      const itemId = checkBox.getAttribute("data-id");
      const isChecked = checkBox.checked;
      const itemText = checkBox.nextElementSibling;

      localStorage.setItem(`checkbox-${itemId}`, JSON.stringify(isChecked));

      if (isChecked) {
        itemText.style.textDecoration = "line-through";
        checkBox.style.backroundColor = "#fc36a0;";
      } else {
        itemText.style.textDecoration = "none";
      }
    });
  });
};

(() => {
  showList();
  showItems();
})();
