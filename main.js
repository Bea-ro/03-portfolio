import './style.css';
import { Header } from './src/components/Header/Header';
import { renderHome } from './src/pages/Home/Home';
import { renderProjects } from './src/pages/Projects/Projects';
import { PROJECTS } from './src/data/projects-data';
import { renderExperience } from './src/pages/Experience/Experience';
import { renderAbout } from './src/pages/About/About';
import { Footer } from './src/components/Footer/Footer';
import { navbarToggle } from './src/utils/navbar-toggle';

document.querySelector('header').innerHTML = Header();
const main = document.querySelector('main');

const handleClic = (ev) => {
  ev.preventDefault();
  const linkHref = ev.target.href;

  if (linkHref.includes('home')) {
    main.innherHTML = renderHome();
  } else if (linkHref.includes('experience')) {
    main.innherHTML = renderExperience();
  } else if (linkHref.includes('projects')) {
    main.innherHTML = renderProjects(PROJECTS);
  } else if (linkHref.includes('about')) {
    main.innherHTML = renderAbout();
  }
};

export const handleImgClic = (ev) => {
  ev.preventDefault();
  const imgSrc = ev.target.src;
  if (imgSrc.includes('personal-img')) {
    main.innherHTML = renderProjects(PROJECTS);
  }
};

renderHome();

const pageLinks = document.querySelectorAll('.page-link');
pageLinks.forEach((pageLink) => pageLink.addEventListener('click', handleClic));

document.querySelector('footer').innerHTML = Footer();

navbarToggle();
