const form = document.getElementById("searchForm");
const input = document.getElementById("wordInput");
const resultDiv = document.getElementById("result");
const savedList = document.getElementById("savedList");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  searchWord();
});

// Load saved words on page load
document.addEventListener("DOMContentLoaded", function () {
  loadSavedWords();
});

function searchWord() {
  const word = input.value.trim();
  if (word === "") {
    displayError("Please enter a word.");
    return;
  }

  resultDiv.innerHTML = "Searching...";

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Word not found");
      }
      return response.json();
    })
    .then((data) => {
      displayResult(data[0]);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      displayError(
        "An error occurred while fetching the definition. Please try again.",
      );
    });
}

function displayResult(entry) {
  const { word, phonetic, phonetics, meanings } = entry;

  let html = `<div class="word-title">${word}</div>`;

  if (phonetic) {
    html += `<div class="phonetic">${phonetic}</div>`;
  }

  // Do audio
  const audioPhonetic = phonetics.find((p) => p.audio);
  if (audioPhonetic) {
    html += `<button class="audio-btn" onclick="playAudio('${audioPhonetic.audio}')">Play Pronunciation</button>`;
  }

  html += `<button class="save-btn" onclick="saveWord('${word}')">Save Word</button>`;

  meanings.forEach((meaning) => {
    html += `<div class="meaning">`;
    html += `<div class="part-of-speech">${meaning.partOfSpeech}</div>`;
    meaning.definitions.forEach((def) => {
      html += `<div class="definition">${def.definition}</div>`;
      if (def.example) {
        html += `<div class="example"><em>Example: ${def.example}</em></div>`;
      }
    });
    if (meaning.synonyms && meaning.synonyms.length > 0) {
      html += `<div class="synonyms">Synonyms: ${meaning.synonyms.join(", ")}</div>`;
    }
    html += `</div>`;
  });

  resultDiv.innerHTML = html;
}

function displayError(message) {
  resultDiv.innerHTML = `<div class="error">${message}</div>`;
}

function playAudio(audioUrl) {
  const audio = new Audio(audioUrl);
  audio.play();
}

function saveWord(word) {
  let saved = JSON.parse(localStorage.getItem("savedWords")) || [];
  if (!saved.includes(word)) {
    saved.push(word);
    localStorage.setItem("savedWords", JSON.stringify(saved));
    displaySavedWords(saved);
    alert(`${word} saved!`);
  } else {
    alert(`${word} is already saved.`);
  }
}

function loadSavedWords() {
  const saved = JSON.parse(localStorage.getItem("savedWords")) || [];
  displaySavedWords(saved);
}

function displaySavedWords(saved) {
  savedList.innerHTML = "";
  saved.forEach((word) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${word}</span>
      <button class="remove-btn" onclick="removeWord('${word}')">Remove</button>
    `;
    savedList.appendChild(li);
  });
}

function removeWord(word) {
  let saved = JSON.parse(localStorage.getItem("savedWords")) || [];
  saved = saved.filter((w) => w !== word);
  localStorage.setItem("savedWords", JSON.stringify(saved));
  displaySavedWords(saved);
}
