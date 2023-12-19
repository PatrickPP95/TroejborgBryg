document.addEventListener('DOMContentLoaded', function () {
    const hamb = document.querySelector('.hamb');
    const menuItems = document.querySelectorAll('.menu p');

    function handleMenuClick() {
        this.focus(); // Focus the menu button to make the styles work on click
    }

    function handleMenuItemClick() {
        this.blur(); // Remove focus from the menu item after clicking
    }

    hamb.addEventListener('click', handleMenuClick);
    hamb.addEventListener('touchstart', handleMenuClick);

    menuItems.forEach(function (item) {
        item.addEventListener('click', handleMenuItemClick);
        item.addEventListener('touchstart', handleMenuItemClick);
    });
});