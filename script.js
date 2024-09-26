const menuIcon = document.getElementById('menu-icon');
        const menu = document.getElementById('menu');
        let menuOpen = false;

        menuIcon.addEventListener('click', () => {
            menu.classList.toggle('active');
            menuOpen = !menuOpen;

            if (menuOpen) {
                menuIcon.innerHTML = `<i class='bx bx-x'></i>`;
            } else {
                menuIcon.innerHTML = `<i class='bx bx-menu'></i>`;
            }
        });
        