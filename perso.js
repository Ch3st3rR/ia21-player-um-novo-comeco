const playPauseButton = document.querySelector('.play-pause');

playPauseButton.addEventListener('click', function() {
  const pauseIcon = playPauseButton.querySelector('.pause-icon');
  const playIcon = playPauseButton.querySelector('.play-icon');

  if (pauseIcon.style.display === 'none') {
    pauseIcon.style.display = 'inline';
    playIcon.style.display = 'none';
  } else {
    pauseIcon.style.display = 'none';
    playIcon.style.display = 'inline';
  }
});
