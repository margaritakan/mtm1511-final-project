(function() {
    const hamburger = document.getElementById('main-hamburger')
    const hamburgerIcon = hamburger.querySelectorAll('i')[0]
    const menu = document.getElementById('main-menu-mobile')
    if (hamburger && menu) {
        hamburger.onclick = function () {
            menu.classList.toggle('open')
            if (menu.classList.contains('open')) {
                hamburgerIcon.classList.remove('fa-bars');
                hamburgerIcon.classList.add('fa-times');
            } else {
                hamburgerIcon.classList.add('fa-bars');
                hamburgerIcon.classList.remove('fa-times');
            }
        }
    }
})();
