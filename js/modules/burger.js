window.addEventListener('DOMContentLoaded', function () {


    const burgerBtn = document.querySelector('.burger'),
        mobileMenu = document.querySelector('.mobile-menu'),
        menuItems = document.querySelectorAll('.mobile-menu__link'),
        mobileMenuClose = document.querySelector('.mobile-menu_close');
    console.log(menuItems);


    burgerBtn.addEventListener('click', function () {


        mobileMenu.classList.add('mobile-menu-active');

    });
    mobileMenuClose.addEventListener('click', function () {

        mobileMenu.classList.toggle('mobile-menu-active');


    });

    mobileMenu.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('mobile-menu')) {

            mobileMenu.classList.remove('mobile-menu-active');


        }

    });
});