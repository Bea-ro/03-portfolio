import './experience.css';
import { experienceTechsList } from '../components/techs-lists';
import { experienceCards } from '../components/cards';
import { skillsToggle } from '../utils/show-skills-event';

const main = document.querySelector('main');

export const renderExperience = () => {
  main.innerHTML = `
  <section class="experience-container">
  <div class="experience-header">
    <h1 class="title">Work with brand leaders and institutional references</h1>
    <h2 class="subtitle">Marketing background</h2>
    ${experienceTechsList}
</div>
    <ul class="experiences-list">  
    ${experienceCards()}
    </ul>
    </section> 
`;

skillsToggle();
};
