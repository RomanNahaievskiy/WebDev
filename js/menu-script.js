"use strict";
const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.icon-menu');

menuIcon.addEventListener("click", function (e) {

    if (e.target.closest('.icon-menu')) {
        menu.classList.toggle('_active');
        menuIcon.classList.toggle('_active');
        document.body.classList.toggle('_active');
    }

});