const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const balls = [];

for (let i = 0; i < 70; i++) {
    balls.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 3 + 2,
        dx: (Math.random() - 0.5) * 1.2,
        dy: (Math.random() - 0.5) * 1.2,
        opacity: Math.random()
    });
}

function animateBalls() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    balls.forEach(b => {
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 0, 0, ${b.opacity})`;
        ctx.fill();

        b.x += b.dx;
        b.y += b.dy;

        if (b.x < 0 || b.x > canvas.width) b.dx *= -1;
        if (b.y < 0 || b.y > canvas.height) b.dy *= -1;
    });

    requestAnimationFrame(animateBalls);
}

animateBalls();
