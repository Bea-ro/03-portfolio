import './Cards.css';
import { EXPERIENCES } from '../../data/experiencies-data';
import { mapData } from '../../utils/map';
import { PERSONALDATA } from '../../data/personal-data';

export const ExperienceCards = () => EXPERIENCES.map((experience) => `
  <li class="card" id="experience-card">
      
  <a href="${experience.organizationURL}" target="blank" rel="noopener noreferrer">
  <figure class="logo">
      <img src=${experience.logo} alt=${experience.organization} class="logo-img"/>
      </figure>
      </a>
      
      <div>
      <a href="${experience.organizationURL}" target="blank" rel="noopener noreferrer">
      <h2 class="organization">${experience.organization}</h2>
      </a>
      <p class="position">${experience.position}</p>
      <p class="date">${experience.date}</p>
      <p class="experience-description">${experience.description}</p>
      <button class="skills" id="experience-skills">See responsabilities</button>
      <ul class="skills-list">
      ${mapData(experience.responsabilities)}
      </ul>
      </div>
      </li>
      `).join('');

export const ProjectCards = (list) => list.map((project) => `
<li class="card" id="project-card">
        <a href=${project.projectURL} target="blank" rel="noopener noreferrer">
        <figure class="project-img-title">
        <p class="date">${project.date}</p>
        <img src=${project.image} alt=${project.name} class="project-img"/>
        <div class="project-title-description">
        <h2 class="project-title">${project.name}</h2>
        <p class="project-description">${project.description}</p>
        </div>
       </figure>
        </a>
        
       
        <ul class="project-techs">
        ${PERSONALDATA.techs.map((tech) => {
    if (project.techs.includes(tech.name)) {
      return `<li class="tech">
              <img src=${tech.icon} alt=${tech.name} class="tech-icon" id=${tech.name}/></li>`;
    }
  }).join('')}
        </ul> 
        
        <button class="skills">See requirements</button>
        <ul class="skills-list">
        ${mapData(project.requirements)}
        </ul>
        <div class="project-links">   
        <figure>
        <a href="${project.github}" class="project-github-link" target="blank" rel="noopener noreferrer">
        <img src="icons/github-icon.png" alt=${project.name} class="social-icon"/>
        <p class="project-in-github">See the code</p>
        </a>
        </figure>
        <figure>
        <a href="${project.projectURL}" class="project-github-link" target="blank" rel="noopener noreferrer">
        <img src="poner enlace" alt=${project.name} class="social-icon"/>
        <p class="project-in-github">Check it out</p>
        </a>
        </figure>
        </div>
    </li>`).join('');
