import './style.css';
import { renderHome } from './src/pages/Home/Home';
import { renderProjects } from './src/pages/Projects/Projects';
import { renderExperience } from './src/pages/Experience/Experience';
import { renderAbout } from './src/pages/About/About';
import { PROJECTS } from './src/data/projects-data';
import { navbarToggle } from './src/utils/navbar-toggle';
import { Header } from './src/components/Header/Header';

document.querySelector('header').innerHTML = Header();
const main = document.querySelector('main');

const handleClic = (ev) => {
  ev.preventDefault();
  const linkHref = ev.target.href;
  main.innerHTML = ' ';
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

const pageLinks = document.querySelectorAll('.page-link');
pageLinks.forEach((pageLink) => pageLink.addEventListener('click', handleClic));

navbarToggle();
renderHome();
