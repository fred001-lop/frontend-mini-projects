

const boton = document.getElementById('burger');
const menu = document.getElementById('navMenu');

boton.addEventListener('click', () =>{
    boton.classList.toggle('active');
    menu.classList.toggle('active');
})