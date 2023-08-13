import { startTimer } from './timer';

document.getElementById('startButton').addEventListener('click', () => {
    const count = parseInt(document.getElementById('countInput').value, 10);
    startTimer(count);
});