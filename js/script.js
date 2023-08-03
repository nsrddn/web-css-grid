const btnMenu = document.querySelector('.show-menu');
const btnClose = document.querySelector('.close');
const nav = document.querySelector('.menu');

btnClose.addEventListener('click', function() {
    nav.style.display = 'none';
});

btnMenu.addEventListener('click', function() {
    nav.style.display = 'block';
});

