const songs = [
	{ title: 'Song 1', file: 'song1.mp3' },
	{ title: 'Song 2', file: 'song2.mp3' },
	{ title:'Song 3', file: 'song3.mp3' },
	// Add more songs here
];

let currentSongIndex = 0;
let audioElement = new Audio();

function renderPlaylist() {
	const playlistSongs = document.getElementById('playlist-songs');
	playlistSongs.innerHTML = '';

	songs.forEach((song, index) => {
		const li = document.createElement('li');
		li.textContent = song.title;
		li.dataset.index = index;

		if (index === currentSongIndex) {
			li.classList.add('active');
		}

		playlistSongs.appendChild(li);
	});
}

//plays the song
function playSong() {
	audioElement.src = `songs/${songs[currentSongIndex].file}`;
	audioElement.play();
	renderPlaylist();
}

function previousSong() {
	currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
	playSong();
}

function pauseSong() {
	audioElement.pause();
}

function nextSong() {
	currentSongIndex = (currentSongIndex + 1) % songs.length;
	playSong();
}

document.getElementById('prev-btn').addEventListener('click', previousSong);
document.getElementById('play-btn').addEventListener('click', playSong);
document.getElementById('pause-btn').addEventListener('click', pauseSong);
document.getElementById('next-btn').addEventListener('click', nextSong);

// Load the first song
playSong();