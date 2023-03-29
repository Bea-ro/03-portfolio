import './projects.css';
import { techsList } from '../components/techs-lists';
import { projectCards } from '../components/cards';
import { skillsToggle } from '../utils/show-skills-event';
import { projectsFilter } from '../components/projectsFilter';

const main = document.querySelector('main');

export const renderProjects = (list) => {
  main.innerHTML = `
  <h1 class="subtitle" id="projects-subtitle">My first projects</h1>
  <div class="filter">
  <p class="filter-title">Filter by main language or technology:</p>
  ${techsList}
 

</div> 

<ul class="projects-list">
  ${projectCards(list)}
  </ul> 
`;

  skillsToggle();
  projectsFilter();
};
