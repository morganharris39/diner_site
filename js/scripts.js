// inject year in footer
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear()

// hamburger menu toggle
const hamburgerElement = document.querySelector('#navButton');
const navElement = document.querySelector('.menuLinks')

hamburgerElement.addEventListener ('click', () => {
    hamburgerElement.classList.toggle('open');
    navElement.classList.toggle('open')
});