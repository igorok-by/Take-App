
;
let menuLink = document.getElementById('menuLink');
let navBar = document.getElementById('navBar');

menuLink.addEventListener('click', function() {
    menuLink.classList.toggle('menu-link--active');
    navBar.classList.toggle('navbar');
    navBar.classList.toggle('navbar--active');
});