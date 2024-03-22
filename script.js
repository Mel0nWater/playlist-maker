// Array of song objects with title and file properties
const songs = [
	{ title: 'Song 1', file: 'song1.mp3' },
	{ title: 'Song 2', file: 'song2.mp3' },
	{ title: 'Song 3', file: 'song3.mp3' }
	// Add more songs here
];

// Index of the current song and Audio object for playing songs
let currentSongIndex = 0;
let audioElement = new Audio();

// Function to render the playlist by creating list items for each song
function renderPlaylist() {
	const playlistSongs = document.getElementById('playlist-songs');
	playlistSongs.innerHTML = '';

	songs.forEach((song, index) => {
		const li = document.createElement('li');
		li.textContent = song.title;
		li.dataset.index = index;

		// Add 'active' class to the current song's list item
		if (index === currentSongIndex) {
			li.classList.add('active');
		}

		playlistSongs.appendChild(li);
	});
}

// Function to play the selected song
function playSong() {
	audioElement.src = `songs/${songs[currentSongIndex].file}`;
	audioElement.play();
	renderPlaylist();
}

// Function to move to the previous song
function previousSong() {
	currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
	playSong();
}

// Function to pause the currently playing song
function pauseSong() {
	audioElement.pause();
}

// Function to move to the next song
function nextSong() {
	currentSongIndex = (currentSongIndex + 1) % songs.length;
	playSong();
}

// Event listeners for playback buttons
document.getElementById('prev-btn').addEventListener('click', previousSong);
document.getElementById('play-btn').addEventListener('click', playSong);
document.getElementById('pause-btn').addEventListener('click', pauseSong);
document.getElementById('next-btn').addEventListener('click', nextSong);

// Load the first song
playSong();