const playButton = document.getElementById("playButton");
const audio = document.getElementById("ynwaAudio");

playButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playButton.classList.add("spin"); // 회전 시작
  } else {
    audio.pause();
    playButton.classList.remove("spin"); // 회전 멈춤
  }
});
