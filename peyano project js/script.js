// const pianokeys = document.querySelectorAll(".piano-keys .key");

// let audio = new Audio("tunes/a.wav")

// const playTuen = (key) => {
//     audio.play();
// }

// pianokeys.forEach(key => {
//     key.addEventListener("click", () => playTuen(Key.dataset.key));

// });

// Selecting all piano keys
const pianoKeys = document.querySelectorAll(".piano-keys .key");

// Creating an audio element and loading a default tune (A.wav)
let audio = new Audio("tunes/A.wav");

// Function to play the tune
const playTune = (key) => {
    audio.src = `tunes/${key}.wav`;
   audio.currentTime = 0; // Reset the audio to the beginning

    audio.play(); // Play the audio
}

// Adding click event listeners to each piano key
pianoKeys.forEach(key => {
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const pressedKey = (e) => {
   // playTune(e.key)
    console.log(e.key)
}

document.addEventListener("keydown", pressedKey);