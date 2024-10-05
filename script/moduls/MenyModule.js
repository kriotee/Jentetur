const MenyModule = (() => {
  const menyListe = [
    {
      day: "friday",
      type: "Middag: ",
      food: " Nachos",
    },
    {
      day: "friday",
      type: "Snacks: ",
      food: " kikertcookies",
    },
    {
      day: "saturday",
      type: " Frokost:",
      food: "Smoothie bowls ",
    },
    {
      day: "saturday",
      type: "Lunsj: ",
      food: " Café?",
    },
    {
      day: "saturday",
      type: "Middag: ",
      food: " Curry",
    },
    {
      day: "saturday",
      type: " Snacks:",
      food: " Lakriskuler",
    },
    {
      day: "sunday",
      type: "Frokost: ",
      food: " Bagels",
    },
    {
      day: "sunday",
      type: "Snacks: ",
      food: " Kanelboller",
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
