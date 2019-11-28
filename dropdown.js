function main() {
    // Make all hamburger menus display content when clicked.
    const dropdownToggles = document.querySelectorAll('.navbar-burger');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const navMenu = document.getElementById(toggle.dataset.target);
            toggle.classList.toggle('is-active');
            navMenu.classList.toggle('is-active');
        });
    });

    console.log('Core JS module loaded...');
}

window.addEventListener('load', main);
