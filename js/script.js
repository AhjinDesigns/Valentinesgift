document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("background-audio");
    setTimeout(() => {
      audio.muted = false;
    }, 1000); // Wait 1 second to unmute
  });
  