function toggleOrbitTheme() {
    const body = document.body;

    body.classList.add("theme-transition");
    body.classList.toggle("orbit-dark");

    // Remove transition class after animation completes
    setTimeout(() => {
        body.classList.remove("theme-transition");
    }, 400);
}
