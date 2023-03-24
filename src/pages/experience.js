import './experience.css';
import { EXPERIENCIES } from '../data/experiencies-data';

const main = document.querySelector('main');

export const renderExperience = () => {
  main.innerHTML = `
  <section class="experience-container">
    <h3 class="title">Work with brand leaders and institutional references</h3>

    <ul class="experiences-list">  
    ${EXPERIENCIES.map((experience) => `
<li class="experience-card">
    
<a href="${experience.organizationURL}">
<figure class="logo">
    <img src="${experience.logo}" alt=${experience.organization}/>
    </figure>
    </a>
    
    <div>
    <h3>${experience.organization}</h3>
    <p>${experience.position}</p>
    <p>${experience.date}</p>
    <p>${experience.description}</p>
    <span class="skills">Skills</span>
    <ul>
    ${experience.responsabilities.map((responsability) => `<li>${responsability}</li>`).join('')}
    </ul>
    </div>
    </li>
    `).join('')}
    </ul>
    </section> 
`;
};
