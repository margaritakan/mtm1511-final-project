(function() {
    const button = document.getElementById('menu-mobile-select');
    const menu = document.getElementById('menu-mobile');
    if (button && menu) {
        button.addEventListener('click', function() {
            menu.classList.toggle('open');
        });
    }
})();
