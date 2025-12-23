let timer;

function startCountdown() {
    clearInterval(timer);

    const input = document.getElementById("targetTime").value;
    const output = document.getElementById("output");

    if (!input) {
        output.innerText = "Please select date and time";
        return;
    }

    const target = new Date(input);

    timer = setInterval(() => {
        const now = new Date();
        const diff = target - now;

        if (diff <= 0) {
            clearInterval(timer);
            output.innerText = "Time reached";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        output.innerText =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}
