

const sideNav = document.getElementById('sideNav');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');

openBtn.addEventListener('click', () => {
    sideNav.style.width = '250px';
});


closeBtn.addEventListener('click', () => {
    sideNav.style.width = '0';
});