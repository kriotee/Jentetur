import FaqModule from "./moduls/FaqModule.js";

const faqContainer = document.querySelector("#faq-container");

const showFaq = (() => {
  const faqListe = FaqModule;
  const faqs = faqListe.getAll();
  let htmlTxt = "";

  faqs.forEach((faq) => {
    htmlTxt += `
        <article class="faq-item-card" >
        <div id="emoji-question">
        <p>${faq.emoji}</p>
        <p><strong>${faq.question}</strong></p>
        </div>
        <p>${faq.answer}</p>
        </article>`;
  });
  faqContainer.innerHTML += htmlTxt;
})();
