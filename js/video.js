var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "暫停";
  } else {
    video.pause();
    btn.innerHTML = "開始";
  }
}