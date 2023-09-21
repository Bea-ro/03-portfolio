import { PROJECTS } from '../data/projects-data';
import { renderProjects } from '../pages/projects';

const main = document.querySelector('main');

export const projectsFilter = () => {
  const filterByTech = (tech, projects) => projects.filter((project) => project.techs.includes(tech));

  const handleFilter = (ev) => {
    const filteredList = filterByTech(ev.target.alt, PROJECTS);
    renderProjects(filteredList);

    const noProjectsMessage = document.createElement('p');
    noProjectsMessage.className = 'no-projects-message';
    main.append(noProjectsMessage);
    if (filteredList.length === 0) {
      document.querySelector('.projects-list').remove();
      noProjectsMessage.innerText = 'Currently working in new projects.';
    } else {
      noProjectsMessage.remove();
    }
  };

  const techIcons = document.querySelectorAll('.tech-icon');

  techIcons.forEach((techIcon) => techIcon.addEventListener('click', handleFilter));

  document.querySelector('.techs-list').id = 'projects-techs-list';
};
