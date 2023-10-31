const mainSlider = document.querySelector('.main-slider img')

const sliders = document.querySelectorAll('.slider-item img')


sliders.forEach(element => {
    element.addEventListener('click', (e) => {
        mainSlider.setAttribute('src', e.target.getAttribute('src'))
    })
});



//Accordion

