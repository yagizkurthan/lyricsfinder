function getLyrics() {
  const artist = document.getElementById('artist').value.trim();
  const song = document.getElementById('song').value.trim();
  const lyricsDiv = document.getElementById('lyrics');

  if (!artist || !song) {
    lyricsDiv.innerText = 'Please enter both artist and song name.';
    return;
  }

  lyricsDiv.innerText = 'Fetching lyrics... 🎧';

  fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
    .then(response => {
      if (!response.ok) throw new Error('Lyrics not found');
      return response.json();
    })
    .then(data => {
      lyricsDiv.innerText = data.lyrics || 'Lyrics not found.';
    })
    .catch(() => {
      lyricsDiv.innerText = 'Error fetching lyrics. Check the spelling or try another song.';
    });
}