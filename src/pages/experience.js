import './experience.css';
import { EXPERIENCIES } from '../data/experiencies-data';

const main = document.querySelector('main');

export const renderExperience = () => {
  main.innerHTML = `
  <section class="experience-container">
    <h3 class="title">Work with brand leaders and institutional references</h3>

    <ul class="experiences-list">  
    ${EXPERIENCIES.map(
      (experience) => `
<li class="experience-card">
    
<a href="${experience.organizationURL}">
<figure class="logo">
    <img src="${experience.logo}" alt=${experience.organization}/>
    </figure>
    </a>
    
    <div>
    <h2 class="organization">${experience.organization}</h2>
    <p class="position">${experience.position}</p>
    <p class="date">${experience.date}</p>
    <p class="experience-description">${experience.description}</p>
    <button class="skills" id="experience-skills">See responsabilities</button>
    <ul class="responsabilities-list">
    ${experience.responsabilities
      .map((responsability) => `<li class="responsability">${responsability}</li>`)
      .join('')}
    </ul>
    </div>
    </li>
    `
    ).join('')}
    </ul>
    </section> 
`;

  const showSkills = (event) => {
    const experienceCard = event.target.closest('.experience-card');
    experienceCard.querySelector('.responsabilities-list').classList.toggle('show');
  };

  const skillsButtons = document.querySelectorAll('.skills');

  skillsButtons.forEach((skillButton) => skillButton.addEventListener('click', showSkills));
};
