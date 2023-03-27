import './style.css';
import { renderHome } from './src/pages/home';
import { renderProjects } from './src/pages/projects';
import { renderExperience } from './src/pages/experience';

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
    main.innherHTML = renderProjects();
  }
};

const pageLinks = document.querySelectorAll('.page-link');
pageLinks.forEach((pageLink) => pageLink.addEventListener('click', handleClic));

renderHome();
