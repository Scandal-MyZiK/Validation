document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    menuBtn.addEventListener('click', () => {
        const headerList = document.querySelector('.header-menu__list');
        headerList.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });
});