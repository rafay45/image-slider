let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let slides = document.querySelectorAll('.slideImg');
let allSlides = document.querySelector('.allSlides');

let currentIndex = 0;

function show(index) {
    let totalSlides = slides.length;
    if(index >= totalSlides) currentIndex = 0
    else if(index < 0) currentIndex = totalSlides - 1

    const offset = -currentIndex * 600;
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