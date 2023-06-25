const clock = document.querySelector('#clock');

function handleClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

handleClock();
setInterval(handleClock, 1000);
