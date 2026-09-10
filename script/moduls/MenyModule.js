const MenyModule = (() => {
  const menyListe = [
    {
      day: "friday",
      type: "Middag: ",
      food: " Sushi",
    },
    {
      day: "saturday",
      type: "Frokost: ",
      food: " Frokosttallerken",
    },
    {
      day: "saturday",
      type: "Lunsj: ",
      food: " Café?",
    },
    {
      day: "saturday",
      type: " Snacks:",
      food: " Kanelboller",
    },
    {
      day: "saturday",
      type: "Middag: ",
      food: " Digg høstmat",
    },
    {
      day: "sunday",
      type: "Frokost: ",
      food: " Pannekaker med eplekaramell",
    },
  ];

  const getAll = () => {
    return structuredClone(menyListe);
  };

  return {
    getAll,
  };
})();

export default MenyModule;
