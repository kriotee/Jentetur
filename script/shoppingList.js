const itemInput = document.getElementById("itemInput");
const sendItemBtn = document.getElementById("sendItem");
const itemList = document.getElementById("shoppingList");

sendItemBtn.addEventListener("click", async () => {
  const title = itemInput.value.trim();

  if (!title) return;

  try {
    await addItem(title);

    itemInput.value = "";

    // Oppdater listen etter lagring
    await renderShoppingList();
  } catch (err) {
    console.error("Feil ved lagring:", err);
  }
});

async function renderShoppingList() {
  itemList.innerHTML = "";

  try {
    const shoppingList = await getShoppingList();

    if (shoppingList.length === 0) {
      itemList.innerHTML = "<li>Ingenting i handlelisten!</li>";
      return;
    }

    shoppingList.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item.title;

      itemList.appendChild(li);
    });
  } catch (err) {
    console.error("Feil ved henting:", err);
  }
}

// Hent listen ved oppstart
renderShoppingList();
