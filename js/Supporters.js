 // 로고 클릭 시 홈으로 이동
 document.getElementById("new_logo").addEventListener("click", () => {
    window.location.href="../index.html";
  });

  // 버튼 클릭 시 YNWAfan.mp3 재생
  document.getElementById("playButton").addEventListener("click", () => {
      const audio = document.getElementById("ynwaAudio");
      const buttonImage = document.getElementById("playButton");

      if(buttonImage.src.includes("play.png")){
          audio.play();
          buttonImage.src="sound/pause.png";
      }
      else if(buttonImage.src.includes("pause.png")){
          audio.pause();
          buttonImage.src="sound/play.png";
      }
  });