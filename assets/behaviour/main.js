const title = document.getElementById("title");
let currentTitle = 0;
const titles = [
  "¿Querés saber el nombre de nuestro hijo?",
  "¿Querés saber el nombre de nuestra hija?",
];

setInterval(() => {
  if (currentTitle === 0) {
    title.textContent = titles[1];
    currentTitle = 1;
  } else {
    title.textContent = titles[0];
    currentTitle = 0;
  }
}, 1000);

const tap = document.getElementById("tap");
let questionTaps = 0;
tap.addEventListener("click", () => {
  questionTaps++;
  if (questionTaps === 10) {
    tap.style.display = "none";
    document.getElementById("meme").style.display = "inline";
  }
});
