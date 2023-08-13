export function startTimer(count) {
    const interval = setInterval(() => {
        if (count >= 0) {
            console.log(count);
            count--;
        } else {
            clearInterval(interval);
        }
    }, 1000);
}