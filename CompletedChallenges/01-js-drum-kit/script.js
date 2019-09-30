window.addEventListener('keydown', function (event) {
    const receivedKeyCode = event.keyCode;
    const key = document.querySelector(`div[data-key="${receivedKeyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${receivedKeyCode}"]`);
    
    if (!audio) return;
    
    audio.currentTime = 0;
    audio.play();
    
    key.classList.add('playing');
});

function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    event.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('div.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
