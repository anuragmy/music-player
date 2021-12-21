const music = document.getElementById("audio");
const prev = document.querySelector("prev");
const next = document.querySelector("next");
const play = document.getElementById("play");

let isPlaying = false;

const playMusic = () => {
  isPlaying = true;
  play.classList.replace("fa-play", "fa-pause");
  music.play();
};
const pauseMusic = () => {
  isPlaying = false;
  play.classList.replace("fa-pause", "fa-play");
  music.pause();
};

play.addEventListener("click", () => {
  isPlaying ? pauseMusic() : playMusic();
});
