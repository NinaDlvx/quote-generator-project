function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = `a20035dd93a6tbea3b9cff448a2b7eeo`;
  let prompt = `Generate an English quote about ${instructionsInput.value}?`;
  let context = `You're a philosophical AI assistant that can make up inspiring quotes. Always provide a quote in italics in a <p>, add an Author if it's known and sign of with <strong>Provided by SheCodes AI</strong>.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="generating">Generating...</div>`;
  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
