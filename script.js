document.addEventListener('DOMContentLoaded', () => {
    const sideMenu = document.querySelector('aside');
    const menuBtn = document.querySelector('#menu_bar');
    const closeBtn = document.querySelector('#close_btn');
    const themeToggle = document.querySelector('.theme-toggler');
    const sidebarLinks = document.querySelectorAll('.sidebar a');

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
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            sidebarLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        });
    });
});

document.querySelector('form').onsubmit = function(e) {
    if (document.getElementById('email').value === '') {
        alert('Por favor, insira seu e-mail.');
        e.preventDefault();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Aqui você pode adicionar qualquer lógica de validação ou processamento do formulário

        // Redireciona para index.html
        window.location.href = 'dashboard.html';
    });
});
