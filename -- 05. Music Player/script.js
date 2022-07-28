'use strict';
const musicContainer = document.querySelector('.music-container ');
// control
const play = document.querySelector('.play');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const navigation = document.querySelector('.navigation');

const audio = document.querySelector('audio');
const progressContainer = document.querySelector('.progress-container');
const progress = document.querySelector('.progress');
const title = document.querySelector('.title');
const imgCover = document.querySelector('.img-cover');

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
// songs title
const songs = ['2aletly 2oul', '3allemni Hawak', '7annit'];

// keep track of song
let songIndex = 0;

//////////////////////////////////////////////////////////
// load song details into DOM
// loadSong(songs[songIndex]);

//////////////////////////////////////////////////////////
//update song details
function loadSong(song) {
  title.textContent = song;
  audio.src = `music/${song}.mp3`;
}

//////////////////////////////////////////////////////////
// Play Music
function playMusic() {
  // clear classes
  musicContainer.classList.remove('play');
  // active play event
  musicContainer.classList.add('play');
  // play button
  play.querySelector('i').classList.remove('fa-play');
  // change play btn to pause
  play.querySelector('i').classList.add('fa-pause');
  audio.play();
}

//////////////////////////////////////////////////////////
// pause music
function pauseMusic() {
  // clear classes
  musicContainer.classList.remove('play');
  // change play btn to pause
  play.querySelector('i').classList.remove('fa-pause');
  // play button
  play.querySelector('i').classList.add('fa-play');

  audio.pause();
}

//////////////////////////////////////////////////////////
// Next song
function nextSong() {
  songIndex++;
  if (songIndex > songs.length) {
    songIndex = 0;
  }
}

//////////////////////////////////////////////////////////
//Event Listener
play.addEventListener('click', e => {
  const click = e.target;
  if (
    click
      .closest('.cta__btn')
      .querySelector('i.fas')
      .classList.contains('fa-play')
  ) {
    playMusic();
  } else {
    pauseMusic();
  }
});
