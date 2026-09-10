const ProgramModule = (() => {
  const programListe = [
    {
      day: "friday",
      activity: " Avreise Oslo",
      time: "18:00 ",
    },
    {
      day: "friday",
      activity: " Middag & Filmkveld",
      time: "21:00 ",
    },
    {
      day: "saturday",
      activity: " Kaffe & strikking for morgenfulger",
      time: "09:00 ",
    },
    {
      day: "saturday",
      activity: " Frokost",
      time: "10:00 ",
    },
    {
      day: "saturday",
      activity: " Bytur",
      time: "11:30 ",
    },
    {
      day: "saturday",
      activity: " Bålkos & Boller",
      time: "15:00 ",
    },
    {
      day: "saturday",
      activity: " Middag",
      time: "18:00 ",
    },
    {
      day: "saturday",
      activity: " Strikk & Drikk",
      time: "19:00 ",
    },
    {
      day: "sunday",
      activity: " Kaffe & strikking for morgenfugler",
      time: "09:00 ",
    },
    {
      day: "sunday",
      activity: " Frokost",
      time: "11:00 ",
    },
    {
      day: "sunday",
      activity: " Avreise Fåberg",
      time: "15:00 ",
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
