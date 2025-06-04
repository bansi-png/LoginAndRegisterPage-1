const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

/* Made by Bansi Jhala
Student at GLS University, Ahmedabad, Gujarat, India
email: bansijhala@yahoo.com
instagram: https://www.instagram.com/bansijhala/
linkedin: https://www.linkedin.com/in/bansijhala/
github: https://github.com/bansi-png */

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});