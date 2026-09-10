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
      item: "Ullgenser",
    },
      {
      item: "Ullsokker",
    },
    {
      item: "Håndarbeid",
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
