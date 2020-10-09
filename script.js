var divLenght = document.querySelectorAll(".song").length;
// console.log(divLenght);

for (var i = 0; i < divLenght; i++) {
  var demo = document
    .querySelectorAll(".song")
    [i].addEventListener("click", playSong);

  var demo = document
    .querySelectorAll(".song")
    [i].addEventListener("dblclick", stopSong);
}

var song1 = new Audio();
song1.src = "music/arijit1.mp3";

var song2 = new Audio();
song2.src = "music/arijit2.mp3";

var song3 = new Audio();
song3.src = "music/arijit3.mp3";

var song4 = new Audio();
song4.src = "music/arijit4.mp3";

var song5 = new Audio();
song5.src = "music/arijit5.mp3";

var song6 = new Audio();
song6.src = "music/arijit6.mp3";

var song7 = new Audio();
song7.src = "music/arijit7.mp3";

var song8 = new Audio();
song8.src = "music/arijit8.mp3";

var song9 = new Audio();
song9.src = "music/arijit9.mp3";

var song10 = new Audio();
song10.src = "music/arijit10.mp3";

var song11 = new Audio();
song11.src = "music/arijit11.mp3";

var song12 = new Audio();
song12.src = "music/arijit12.mp3";

function playSong() {
  var songId = this.innerHTML;
  // console.log(songId);

  switch (songId) {
    case "1":
      song1.play();
      break;

    case "2":
      song2.play();
      break;

    case "3":
      song3.play();
      break;

    case "4":
      song4.play();
      break;

    case "5":
      song5.play();
      break;

    case "6":
      song6.play();
      break;

    case "7":
      song7.play();
      break;

    case "8":
      song8.play();
      break;

    case "9":
      song9.play();
      break;

    case "10":
      song10.play();
      break;

    case "11":
      song11.play();
      break;

    case "12":
      song12.play();
      break;

    default:
      console.log("wrong input");
      break;
  }
}

function stopSong() {
  var songId = this.innerHTML;
  console.log(songId);

  switch (songId) {
    case "1":
      song1.pause();
      break;

    case "2":
      song2.pause();
      break;

    case "3":
      song3.pause();
      break;

    case "4":
      song4.pause();
      break;

    case "5":
      song5.pause();
      break;

    case "6":
      song6.pause();
      break;

    case "7":
      song7.pause();
      break;

    case "8":
      song8.pause();
      break;

    case "9":
      song9.pause();
      break;

    case "10":
      song10.play();
      break;

    case "11":
      song11.play();
      break;

    case "12":
      song12.play();
      break;

    default:
      console.log("wrong input");
      break;
  }
}
