import './Projects.css';
import { TechsList } from '../../components/TechsLists/TechsLists';
import { ProjectCards } from '../../components/Cards/Cards';
import { skillsToggle } from '../../utils/show-skills-event';
import { projectsFilter } from '../../utils/projects-filter';

const main = document.querySelector('main');

export const renderProjects = (list) => {
  main.innerHTML = `
  <h1 class="subtitle" id="projects-subtitle">My first projects</h1>
<div class="filter">
  <p class="filter-title">Filter by main language:</p>
  ${TechsList} 
  </div>
<ul class="projects-list">
  ${ProjectCards(list)}
  </ul> 
  
`;

  skillsToggle();
  projectsFilter();
};
