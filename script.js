let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let slides = document.querySelectorAll('.slideImg');
let allSlides = document.querySelector('.allSlides');
let heading = document.querySelectorAll('.heading');

let currentIndex = 0;

function show(index) {
    let totalSlides = slides.length;
    let totalText = heading.length;
    if (index >= totalSlides && index >= totalText) {
        currentIndex = 0
    }
    if (index < 0 ) {
        currentIndex = totalSlides - 1;
        currentIndex = totalText - 1;
    }

    const offset = -currentIndex * 600;
    const offsetText = -currentIndex * 200;
    document.querySelector('.allHeadings').style.transform = `translateX(${offsetText}px)`;
    document.querySelector('.allSlides').style.transform = `translateX(${offset}px)`;
}

next.addEventListener('click', () => {
    currentIndex++;
    show(currentIndex);
});
prev.addEventListener('click', () => {
    currentIndex--;
    show(currentIndex);
});

setInterval(() => {
    currentIndex++;
    show(currentIndex);
}, 3000);

show(currentIndex);