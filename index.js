const music = document.getElementById("audio");
const image = document.getElementById("image");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const play = document.getElementById("play");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");

const songs = [
  {
    name: "jacinto-1",
    title: "Electric Chill Machine",
    artist: "Jacinto Design",
    image: `img/jacinto-1.jpg`,
  },
  {
    name: "jacinto-2",
    title: "Seven Nation Army (remix)",
    artist: "Jacinto Design",
    image: `img/jacinto-2.jpg`,
  },
  {
    name: "jacinto-3",
    title: "Electric Chill Machine",
    artist: "Jacinto Design",
    image: `img/jacinto-3.jpg`,
  },
];

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

const playStatus = () => {
  isPlaying ? pauseMusic() : playMusic();
};

const loadSong = (song) => {
  title.textContent = song.title;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = song.image;
};
//current song
let current = 0;

const prevSong = () => {
  current -= 1;
  if (current < 0) {
    current = 2;
  }
  loadSong(songs[current]);
  playMusic();
};
const nextSong = () => {
  current += 1;
  if (current > 2) {
    current = 0;
  }

  loadSong(songs[current]);
  playMusic();
};

const updateProgress = (e) => {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement;
    let progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
  }
};

play.addEventListener("click", playStatus);
prev.addEventListener("click", prevSong);
next.addEventListener("click", nextSong);
music.addEventListener("timeupdate", updateProgress);
