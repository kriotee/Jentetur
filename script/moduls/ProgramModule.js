const ProgramModule = (() => {
  const programListe = [
    {
      day: "friday",
      activity: " Avreise Oslo",
      time: "15:00 ",
    },
    {
      day: "friday",
      activity: " Middag & Filmkveld",
      time: "19:00 ",
    },
    {
      day: "friday",
      activity: " Singstar",
      time: "21:00 ",
    },
    {
      day: "saturday",
      activity: " 45min Mat Pilates",
      time: "10:00 ",
    },
    {
      day: "saturday",
      activity: " Frokost",
      time: "11:00 ",
    },
    {
      day: "saturday",
      activity: " Bytur",
      time: "13:00 ",
    },
    {
      day: "saturday",
      activity: " Middag",
      time: "18:00 ",
    },
    {
      day: "saturday",
      activity: " Paint on Pots",
      time: "19:00 ",
    },
    {
      day: "saturday",
      activity: " Musikkbingo",
      time: "21:00 ",
    },
    {
      day: "sunday",
      activity: " 20min Tøy & Bøy",
      time: "10:00 ",
    },
    {
      day: "sunday",
      activity: " Frokost",
      time: "11:00 ",
    },
    {
      day: "sunday",
      activity: " Avreise Fåberg",
      time: "13:00 ",
    },
  ];

  const getAll = () => {
    return structuredClone(programListe);
  };

  return {
    getAll,
  };
})();

export default ProgramModule;
