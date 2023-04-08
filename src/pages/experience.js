import './experience.css';
import { ExperienceTechsList } from '../components/TechsLists';
import { ExperienceCards } from '../components/abc';
import { skillsToggle } from '../utils/show-skills-event';

const main = document.querySelector('main');

export const renderExperience = () => {
  main.innerHTML = `
  <section class="experience-container">
  <div class="experience-header">
    <h1 class="title">Work with brand leaders and institutional references</h1>
    <h2 class="subtitle">Marketing background</h2>
    ${ExperienceTechsList}
</div>
    <ul class="experiences-list">  
    ${ExperienceCards()}
    </ul>
    </section> 
`;

  skillsToggle();
};
