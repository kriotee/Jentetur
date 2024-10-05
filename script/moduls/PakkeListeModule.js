const PakkeListeModule = (() => {
  const pakkeListeItems = [
    {
      item: "Rosa pysj",
    },
    {
      item: "Toalettsaker",
    },
    {
      item: "Treningsklær",
    },
    {
      item: "Treningsmatte",
    },
    {
      item: "Ullgenser",
    },
    {
      item: "Håndarbeid",
    },
    {
      item: "Kopp til å male på",
    },
    {
      item: "Lakriskuler",
    },
    {
      item: "Digge klær",
    },
    {
      item: "Håndkle",
    },
    {
      item: "Godt humør",
    },
  ];

  const getAll = () => {
    return structuredClone(pakkeListeItems);
  };

  return {
    getAll,
  };
})();

export default PakkeListeModule;
