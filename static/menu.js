// menu.js

document.addEventListener('DOMContentLoaded', function() {
    const containerMenu = document.querySelector('.container-menu');
    const btnMenu = document.querySelector('.btn-menu');

    btnMenu.addEventListener('click', () => {
        containerMenu.classList.toggle('active');
    });
});
