import './experience.css';
import { EXPERIENCIES } from '../data/experiencies-data';

const main = document.querySelector('main');

export const renderExperience = () => {
  main.innerHTML = `
    <p>I'm lucky of working with brand leaders and institutional references:</p>
    <ul class="experiences-list">  
    ${EXPERIENCIES.map((experience) => `
<li class="experience-card">
    
<a href="${experience.organizationURL}">
    <figure>
    <img src="${experience.logo}" alt=${experience.organization} />
    <h1>${experience.organization}</h1>
    </figure>
    </a>
    
    <div>
    <p>${experience.position}</p>
    <p>${experience.date}</p>
    <p>${experience.description}</p>
    <ul>
    ${experience.responsabilities.forEach((responsability) => `<li>${responsability}</li>`)}
    </ul>
    </div>
    </li>
    `).join('')};
    </ul> 
`;
};
