// Target date: 25 November 2025 - 14:00
const targetDate = new Date("2025-11-25T14:00:00");

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML = "شروع شد!";
        return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").innerHTML =
        `${d} روز | ${h} ساعت | ${m} دقیقه | ${s} ثانیه`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
