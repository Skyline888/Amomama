'use strict';

console.log('a');
// first slider
let firstslider = new Siema({
    selector: '.slider--first .slider__area',
    loop: true,
});
let prevButtonF = document.querySelector('.slider--first .slider__button-prev').addEventListener('click', () => firstslider.prev());
let nextButtonF = document.querySelector('.slider--first .slider__button-next').addEventListener('click', () => firstslider.next());

// second slider
let secondslider = new Siema({
    selector: '.slider--second .slider__area',
    perPage: {
        768: 1,
        1024: 2
    },
    loop: true,
});
let prevButtonS = document.querySelector('.slider--second .slider__button-prev').addEventListener('click', () => secondslider.prev());
let nextButtonS = document.querySelector('.slider--second .slider__button-next').addEventListener('click', () => secondslider.next());