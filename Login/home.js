const cursorDot = document.querySelector("[data-cursordot]");
const cursorOutline = document.querySelector("[data-cursoroutline]");

window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.style.left = `${posX - 15}px`;
    cursorOutline.style.top = `${posY - 15}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});
