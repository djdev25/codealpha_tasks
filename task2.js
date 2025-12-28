const quotes = [
  { text: "Every one has the right to refute any opinion. But no one has the right to prevent its expression.”", author: "Periyar" },
  { text: "Life should be great rather than long.”", author: "Ambedkar" },
  { text: "The world is seeing India with a ray of hope and our diaspora can play a crucial role in further spreading it.", author: "PM Modi" },
  { text: "Let my courage dissolve every shackle dawn by dawn.", author: "Mahakavi Bharathiyar" },
  { text: "A non-violent soldier of freedom will covet nothing for himself, he fights only for the freedom of his country.", author: "Mahathma Gandhi" }
];

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteEl.textContent = `"${quotes[randomIndex].text}"`;
  authorEl.textContent = `— ${quotes[randomIndex].author}`;
}

// Display quote on page load
newQuote();
