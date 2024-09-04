document.querySelector('.menu-icon').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.navOpt').classList.toggle('active');

    document.addEventListener('click', function (e) {
        const navOpt = document.querySelector('.navOpt');
        const menuIcon = document.querySelector('.menu-icon');

        if (!navOpt.contains(e.target) && !menuIcon.contains(e.target)) {
            navOpt.classList.remove('active');
        }
    });
});