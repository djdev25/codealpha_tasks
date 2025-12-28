let flashcards = [
  { question: "What is HTML?", answer: "HTML stands for HyperText Markup Language" },
  { question: "What is CSS?", answer: "CSS styles the HTML content" }
];

let currentIndex = 0;

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const showAnswerBtn = document.getElementById("showAnswer");

function displayCard() {
  questionEl.textContent = flashcards[currentIndex].question;
  answerEl.textContent = flashcards[currentIndex].answer;
  answerEl.classList.add("hidden");
  showAnswerBtn.textContent = "Show Answer";
}

showAnswerBtn.onclick = () => {
  if (answerEl.classList.contains("hidden")) {
    answerEl.classList.remove("hidden");
    showAnswerBtn.textContent = "Hide Answer";
  } else {
    answerEl.classList.add("hidden");
    showAnswerBtn.textContent = "Show Answer";
  }
};

function nextCard() {
  if (currentIndex < flashcards.length - 1) {
    currentIndex++;
    displayCard();
  }
}

function prevCard() {
  if (currentIndex > 0) {
    currentIndex--;
    displayCard();
  }
}

function addCard() {
  const q = document.getElementById("newQuestion").value;
  const a = document.getElementById("newAnswer").value;

  if (q && a) {
    flashcards.push({ question: q, answer: a });
    document.getElementById("newQuestion").value = "";
    document.getElementById("newAnswer").value = "";
    currentIndex = flashcards.length - 1;
    displayCard();
  }
}

function editCard() {
  const newQ = prompt("Edit Question:", flashcards[currentIndex].question);
  const newA = prompt("Edit Answer:", flashcards[currentIndex].answer);

  if (newQ && newA) {
    flashcards[currentIndex] = { question: newQ, answer: newA };
    displayCard();
  }
}

function deleteCard() {
  flashcards.splice(currentIndex, 1);
  if (currentIndex > 0) currentIndex--;
  displayCard();
}

displayCard();
