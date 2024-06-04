function generateQuote(event) {
  event.preventDefault();
  new Typewriter("#quote", {
    strings: `Either you run the day or the day runs you`,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
