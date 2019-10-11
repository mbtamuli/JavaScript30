const player = document.querySelector('.player');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const video = player.querySelector('.player__video');
const playButton = player.querySelector('.player__button');
const ranges = player.querySelectorAll('.player__slider');
const skipButtons = player.querySelectorAll('[data-skip]');

const updateProgress = function() {
    const currentProgress = (video.currentTime / video.duration) * 100;
    progressBar.setAttribute('style', `flex-basis: ${currentProgress}%`);
}

const togglePlay = function() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
};

const handleRangeUpdate = function() {
    video[this.name] = this.value;
};

const handleSkip = function () {
    console.log(`video.currentTime: ${video.currentTime}`);
    video.currentTime += parseFloat(this.dataset.skip);
};

const scrub = function(event) {
    const scrubTime = (event.offsetX / video.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
};

video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgress);

playButton.addEventListener('click', togglePlay);
ranges.forEach(range => range.addEventListener('input', handleRangeUpdate));
skipButtons.forEach(skipButton => skipButton.addEventListener('click', handleSkip));
let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (event) => mousedown && scrub(event));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
progress.addEventListener('mouseout', () => mousedown = false);