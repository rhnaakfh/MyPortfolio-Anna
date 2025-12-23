// =======================
// 1. Tilt Effect (Desktop)
// =======================
window.initOrbitTilt = () => {
    const frame = document.querySelector(".orbit-image-tilt");

    if (!frame) return;

    frame.addEventListener("mousemove", (e) => {
        const rect = frame.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const rotateX = (y / rect.height) * 12;
        const rotateY = (x / rect.width) * -12;

        frame.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    frame.addEventListener("mouseleave", () => {
        frame.style.transform = "rotateX(0) rotateY(0)";
    });
};


// =========================================
// 2. Floating Shapes Mouse Parallax
// =========================================
window.orbitFloatingParallax = () => {
    const shapes = document.querySelectorAll(".orbit-floating-shape");

    document.addEventListener("mousemove", (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;

        shapes.forEach((shape, i) => {
            shape.style.transform = `translate(${x * (i + 1)}px, ${y * (i + 1)}px)`;
        });
    });
};

// =========================================
// 3. Fade-Up Animation on Load
// =========================================
window.orbitFadeUp = () => {
    const elements = document.querySelectorAll(".fade-up");

    elements.forEach((el, i) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(25px)";
        el.style.transition = `all 0.7s ease-out ${i * 0.15}s`;

        requestAnimationFrame(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        });
    });
};
