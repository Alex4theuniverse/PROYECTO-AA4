function mostrarVideo(videoSrc) {
    // Obtén el modal y el video
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("videoElement");
  
    // Establece la fuente del video
    video.src = videoSrc;
  
    // Muestra el modal
    modal.style.display = "flex";
  
    // Reproduce el video
    video.play();
  }
  
  function cerrarVideo() {
    // Obtén el modal y el video
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("videoElement");
  
    // Detén y oculta el video
    video.pause();
    video.currentTime = 0;
  
    // Oculta el modal
    modal.style.display = "none";
  }
  