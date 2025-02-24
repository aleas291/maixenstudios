
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const leftArrow = document.getElementById("left");
    const rightArrow = document.getElementById("right");

    // Initialisierung des Scrolls
    const cardWidth = carousel.querySelector(".card").offsetWidth;
    const scrollAmount = cardWidth + 16; // 16px ist der Abstand zwischen den Karten

    // Funktion, um das Carousel nach links zu scrollen
    leftArrow.addEventListener("click", () => {
        carousel.scrollLeft -= scrollAmount;
    });

    // Funktion, um das Carousel nach rechts zu scrollen
    rightArrow.addEventListener("click", () => {
        carousel.scrollLeft += scrollAmount;
    });

    // Drag-and-Drop Funktionalität
    let isDragging = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.pageX;
        scrollLeft = carousel.scrollLeft;
        carousel.style.cursor = 'grabbing';
    });

    carousel.addEventListener("mouseleave", () => {
        isDragging = false;
        carousel.style.cursor = 'grab';
    });

    carousel.addEventListener("mouseup", () => {
        isDragging = false;
        carousel.style.cursor = 'grab';
    });

    carousel.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        const x = e.pageX;
        const walk = (x - startX) * 3; // Die Geschwindigkeit des Scrollens anpassen
        carousel.scrollLeft = scrollLeft - walk;
    });
});
const carousel = document.querySelector('.carousel');
let scrollAmount = 0;
const cardWidth = carousel.querySelector('.card').offsetWidth + 16; // Kartenbreite + Abstand

// Wiederhole die Karten, indem du das erste Set an das Ende verschiebst
carousel.addEventListener('scroll', () => {
    if (carousel.scrollLeft >= (carousel.scrollWidth - carousel.offsetWidth)) {
        carousel.scrollLeft = 0;  // Setze die Scrollposition zurück
    }
});

// Optional: Füge Schaltflächen hinzu, um das Carousel manuell zu scrollen
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

leftBtn.addEventListener('click', () => {
    carousel.scrollLeft -= cardWidth;
});

rightBtn.addEventListener('click', () => {
    carousel.scrollLeft += cardWidth;
});