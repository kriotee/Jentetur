const PakkeListeModule = (() => {
  const getAll = () => {
    const storedItems = localStorage.getItem("newItems");
    return storedItems ? JSON.parse(storedItems) : [];
  };

  const addItem = (item) => {
    const newItem = {
      item,
    };

    let newItems = localStorage.getItem("newItems");

    if (newItems) {
      const newItems = JSON.parse(localStorage.getItem("newItems"));
      newItems.push(newItem);
      localStorage.setItem("newItems", JSON.stringify(newItems));
    } else {
      const newItems = [];
      newItems.push(newItem);
      localStorage.setItem("newItems", JSON.stringify(newItems));
    }
  };

  return {
    getAll,
    addItem,
  };
})();

export default PakkeListeModule;
