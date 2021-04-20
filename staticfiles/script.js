let currentAudio = undefined;
let play = undefined;
let pause = undefined;

function audioTag(audio) {
  currentAudio = audio.querySelector("audio");
  pause = audio.querySelector(".pause");
  play = audio.querySelector(".play");
  currentAudio.addEventListener("playing", () => {
    play.style.display = "none";
    pause.style.display = "block";
  });
  currentAudio.addEventListener("pause", () => {
    play.style.display = "block";
    pause.style.display = "none";
  });
}
function playAudio() {
  let allAudios = document.querySelectorAll("audio");
  let allPlay = document.querySelectorAll(".play");
  let allPause = document.querySelectorAll(".pause");
  for (let i = 0; i < allAudios.length; i++) {
    allPause[i].style.display = "none";
    allPlay[i].style.display = "block";
    allAudios[i].currentTime = 0;
    allAudios[i].pause();
  }
  currentAudio.play();
}
function pauseAudio() {
  currentAudio.pause();
}
