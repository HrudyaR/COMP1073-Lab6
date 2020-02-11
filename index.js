// keydown event
window.addEventListener("keydown", playSound);

// function to play the ound
function playSound(event) {
    const audio = document.querySelector("audio[data-key='" + event.keyCode +"']");
    const key = document.querySelector("div[data-keycode='" + event.keyCode +"']");
    key.classList.add('press');    
    // console.log(audio);
    audio.currentTime = 0;
    audio.play();
}

// Function to remove the transition effect
function removeTransition(e) {
    e.target.classList.remove('press');
}

const keys = [...document.querySelectorAll('.sound')];
keys.forEach(key => key.addEventListener('transitionend', removeTransition));