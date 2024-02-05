// Author: Nguyen Thanh Tung

const topMenu = document.getElementById('ntt-top-menu');
const toggleTopMenuIcon = document.getElementById('ntt-toggle-top-menu');

document.addEventListener('click', (e) => {
    if (toggleTopMenuIcon.contains(e.target)) { // e.target click bat ky phan nao cua trang web
        // Click to Toggle Top Menu Icon
        topMenu.classList.toggle('ntt-top-menu-expanded');
        topMenu.classList.toggle('hidden'); // co thi toggle se xoa di, chua co thi se them vao
    } else {
        // CLick outside from Toggle Top Menu Icon
        if (topMenu.classList.contains('ntt-top-menu-expanded')) {
            topMenu.classList.remove('ntt-top-menu-expanded');
            topMenu.classList.toggle('hidden'); //click outside appear hidden
        }
    }
})