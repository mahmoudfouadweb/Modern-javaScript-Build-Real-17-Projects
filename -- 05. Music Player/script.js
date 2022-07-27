'use strict';
const musicContainer = document.querySelector('.music-container ');
// control
const play = document.querySelector('.play');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

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
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
// songs title
const songs = ['2aletly 2oul', '3allemni Hawak'];

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
//Event Listener
play.addEventListener('click', e => {
  loadSong(songs[songIndex]);
  audio.play();
  console.log(e.target);
});
