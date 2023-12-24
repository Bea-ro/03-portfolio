import './Experience.css';
import { ExperienceTechsList } from '../../components/TechsLists/TechsLists';
import { ExperienceCards } from '../../components/Cards/Cards';
import { skillsToggle } from '../../utils/show-skills-event';

const main = document.querySelector('main');

export const renderExperience = () => {
  document.querySelector('body').classList.remove('body-home');
  main.innerHTML = `
  <h1 class="title">experience<span class="parenthesis">( )</span></h1>
  <section class="experience-container">
  <div class="experience-header">
    <p class="experience-title">Work with brand leaders and institutional references</p>
    <h2 class="marketing">Marketing background</h2>
    ${ExperienceTechsList}
</div>
    <ul class="experiences-list">  
    ${ExperienceCards()}
    </ul>
    </section> 
`;

  skillsToggle();
};
