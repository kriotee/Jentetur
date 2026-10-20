const PakkeListeModule = (() => {
  const pakkeListeItems = [
    {
      item: "Rosa pysj",
    },
    {
      item: "Toalettsaker",
    },
    {
      item: "Klær til bytur",
    },
    {
      item: "Klær til bålkos",
    },
    {
      item: "Digge klær",
    },
    {
      item: "Treningsklær",
    },
    {
      item: "Ullgenser",
    },
    {
      item: "Ullsokker",
    },
    {
      item: "Tøfler",
    },
    {
      item: "Håndarbeid",
    },
    {
      item: "Håndkle",
    },
    {
      item: "Yogamatte",
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
