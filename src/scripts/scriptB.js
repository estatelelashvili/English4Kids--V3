// console.log(JSON.parse(localStorage.getItem("Card")));

const card = JSON.parse(localStorage.getItem("Card"));
const categoryContainer = document.createElement("div");
categoryContainer.className = "category-container";

let soundBank = [];
for (let i = 0; i < card.length; i++) {
  const category = document.createElement("div");
  const categoryImage = document.createElement("img");
  categoryImage.className = "card-img";
  const categoryName = document.createElement("p");
  categoryName.className = "card-name";
  category.className = "card";
  categoryImage.src = "../assets/" + card[i].image;
  soundBank.push("../assets/" + card[i].audioSrc);
  categoryName.innerHTML = `${card[i].word}`;
  category.appendChild(categoryName);
  category.appendChild(categoryImage);
  categoryContainer.appendChild(category);
}
const main = document.getElementById("main-container");
main.appendChild(categoryContainer);
// console.log(soundBank);

class Card {
  constructor(sounds) {
    this.sounds = sounds;
    this.counter = 0;
    this.randomSounds = [];
    this.randomSounds = this.randomizeMp3(sounds);
  }

  randomizeMp3(data) {
    let randomSounds = [];
    while (randomSounds.length < 8) {
      let randomNum = Math.floor(Math.random() * 8);
      if (randomSounds.includes(data[randomNum])) {
      } else {
        randomSounds.push(data[randomNum]);
      }
    }
    return randomSounds;
  }

  playSound() {
    console.log("play");
    let audio = new Audio(this.randomSounds[this.counter]);
    audio.play();
    this.counter++;
    if (this.counter > 7) {
      this.counter = 0;
    }
  }
}

const cardTest = new Card(soundBank);

// this is working/dd
const buttonPlay = document.getElementById("play-btn-id");
const audio = new Audio("../assets/audio/dance.mp3");

buttonPlay.addEventListener("click", function () {
  audio.play();
});
