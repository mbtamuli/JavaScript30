const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    if (seconds === 0) {
        secondHand.classList.add('notransition');
    } else {
        secondHand.classList.remove('notransition');
    }
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    const minutes = now.getMinutes();
    const minutesDegree = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    if (minutes === 0) {
        minuteHand.classList.add('notransition');
    } else {
        minuteHand.classList.remove('notransition');
    }
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

    const hours = now.getHours();
    const hoursDegree = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    if (hours === 0) {
        hourHand.classList.add('notransition');
    } else {
        hourHand.classList.remove('notransition');
    }
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate, 1000);

setDate();