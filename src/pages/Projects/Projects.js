import './Projects.css';
import { TechsList } from '../../components/TechsLists/TechsLists';
import { ProjectCards } from '../../components/Cards/Cards';
import { skillsToggle } from '../../utils/show-skills-event';
import { clearFilter, projectsFilter } from '../../utils/projects-filter';

const main = document.querySelector('main');

export const renderProjects = (list) => {
  main.innerHTML = `
  <h1 class="title" id="projects-subtitle">projects<span class="parenthesis">( )</span></h1>
<div class="filter">
  <p class="filter-title">Filter by main language:</p>
  <div class="filters-and-clear">
  ${TechsList} 
  <button class="clear">Clear</button>
  </div>
  </div>
<ul class="projects-list">
  ${ProjectCards(list)}
  </ul> 
`;

  skillsToggle();
  projectsFilter();
  clearFilter();
};
