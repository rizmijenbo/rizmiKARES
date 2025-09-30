function toggleMusic() {
  const music = document.getElementById('romantic-music');
  const button = document.getElementById('music-button');

  if (music.paused) {
    music.play();
    button.textContent = '⏸️ Pause';
  } else {
    music.pause();
    button.textContent = '▶️ Play';
  }
}