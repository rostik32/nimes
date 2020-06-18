let burger = document.querySelector('.menu_burger');
let navMenu = document.querySelector('.site-navigation');
let body = document.querySelector('body');
let mainHeader = document.querySelector('.main-header');

burger.addEventListener('click', function(){
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('lock');
});


