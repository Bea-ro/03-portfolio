const mobileMenu = document.querySelector('#mobile-menu');

const showMenu = () => {
  document.querySelector('nav').classList.toggle('show');
  mobileMenu.textContent === 'X'? mobileMenu.innerHTML = '&#9776;' : mobileMenu.textContent = 'X';
};

export const navbarToggle = () => {
  mobileMenu.addEventListener('click', showMenu);
};
