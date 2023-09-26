export const navbarToggle = () => {
  const mobileMenu = document.querySelector('#mobile-menu');
  const showMenu = () => {
    document.querySelector('nav').classList.toggle('show');
    if (mobileMenu.innerHTML === 'X') {
      mobileMenu.innerHTML = '\u2630';
    } else {
      mobileMenu.innerHTML = 'X';
    }
  };
  mobileMenu.addEventListener('click', showMenu);
};
