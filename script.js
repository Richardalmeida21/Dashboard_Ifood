const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');
const themeToggle = document.querySelector('.theme-toggler');

menuBtn.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
        sideMenu.style.display = 'block';
    }
});

closeBtn.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
        sideMenu.style.display = 'none';
    }
});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggle.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggle.querySelector('span:nth-child(2)').classList.toggle('active');
});

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebarLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});