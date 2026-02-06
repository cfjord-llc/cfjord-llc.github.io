(function () {
    const navLinks = document.querySelector('.nav-links');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');

    if (!navLinks || !mobileMenuBtn) return;

    function setExpanded(expanded) {
        mobileMenuBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    }

    function openMenu() {
        navLinks.classList.add('active');
        document.body.classList.add('menu-open');
        setExpanded(true);
    }

    function closeMenu() {
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
        setExpanded(false);
    }

    window.toggleMenu = function () {
        if (navLinks.classList.contains('active')) {
            closeMenu();
            return;
        }
        openMenu();
    };

    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });

    document.addEventListener('click', (e) => {
        if (!navLinks.classList.contains('active')) return;
        const clickedInside = navLinks.contains(e.target) || mobileMenuBtn.contains(e.target);
        if (!clickedInside) closeMenu();
    });
})();

