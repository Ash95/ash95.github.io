window.addEventListener('DOMContentLoaded', () => {

    const burger = document.querySelector('.burger_button'),
        menu = document.querySelector('.menu'),
        wrapper = document.querySelector('.mobile_menu_wrapper'),
        items = document.querySelectorAll('.menu_item');

    document.body.addEventListener('touchstart', (e) => {
        if (e.target.classList.contains('mobile_menu_wrapper')) {
            console.log(e.target);
            hideBurgerMenu();
        }
    })

    burger.addEventListener('touchstart', (e) => {  
        if (menu.classList.contains('menu_active')) {
            hideBurgerMenu();
        } else {
            showBurgerMenu();
        }
    })

    items.forEach((item) => {
        item.addEventListener('touchstart', (e) => {
            const time = setTimeout(hideBurgerMenu, 10);
        })
    })


    function showBurgerMenu () {
        menu.classList.add('menu_active');
        burger.classList.add('burger_button_active');
        document.body.style.overflow = 'hidden';
        wrapper.style.display = 'block';
    }

    function hideBurgerMenu () {
        menu.classList.remove('menu_active');
        burger.classList.remove('burger_button_active');
        document.body.style.overflow = 'auto';
        wrapper.style.display = 'none';
    }

})