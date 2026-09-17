const FaqModule = (() => {
  const faqListe = [
    {
      emoji: "🚰",
      question: " Er det innlagt vann?",
      answer: " Ja, det er innlagt vann",
    },
    {
      emoji: "⚡",
      question: " Er det strøm?",
      answer: " Ja, vi har strøm",
    },
    {
      emoji: "🛁 ",
      question: " Er det mulig å dusje?",
      answer: " Ja, det er mulig å dusje",
    },
    {
      emoji: "🛏️",
      question: " Må jeg ha med sengetøy?",
      answer: " Nei, sengetøy og dyner er der",
    },
    {
      emoji: "🚽",
      question: " Er det utedo?",
      answer: " Nei, det er vannklosett",
    },
    {
      emoji: "🌐",
      question: " Er det internett?",
      answer: " Ja, vi har internett",
    },
    {
      emoji: "🧶",
      question: " Må jeg strikke?",
      answer: " Ja, det må du faktisk",
    },
  ];

  const getAll = () => {
    return structuredClone(faqListe);
  };

  return {
    getAll,
  };
})();

export default FaqModule;
