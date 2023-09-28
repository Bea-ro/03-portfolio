import './Cards.css';
import { EXPERIENCES } from '../../data/experiencies-data';
import { mapData } from '../../utils/map';
import { PERSONALDATA } from '../../data/personal-data';

export const ExperienceCards = () =>
  EXPERIENCES.map(
    (experience) => `
  <li class="card" id="experience-card">
  <a href="${experience.organizationURL}" target="blank" rel="noopener noreferrer">
  <img src=${experience.logo} alt=${experience.organization} class="logo"/>     
  <div class="experience-info">
  <div class="organization-date">
  <h2 class="organization">${experience.organization}</h2>
  <p class="date">${experience.date}</p>
  </div>
  <p class="position">${experience.position}</p>
  </div>
  </a>
  <div class="description-responsabilities">
  <p class="experience-description">${experience.description}</p>
      <button class="skills" id="responsabilities">See responsabilities</button>
      </div>
      <ul class="skills-list">
      ${mapData(experience.responsabilities)}
      </ul>
      </li>
      `
  ).join('');

export const ProjectCards = (list) =>
  list
    .map(
      (project) => `
        <li class="card" id="project-card">
        <a href=${
          project.projectURL
        } target="blank" rel="noopener noreferrer" class="project-img-info">
        <img src=${project.image} alt=${project.name} class="project-img"/>
        <div class="card-info">
        <div class="project-title-date">
        <h2>${project.name}</h2>
        <span>${project.date}</span>
        </div>
        <p class="project-description">${project.description}</p>
        </div>
        <p class = ${project.name === 'Your Art API' ? 'progress-show' : 'progress-hide'} id='in-progress'>In progress</p>
        </a>
        <ul class="project-techs">
        ${PERSONALDATA.techs
          .map((tech) => {
            if (project.techs.includes(tech.name)) {
              return `<li class="tech">
              <img src=${tech.icon} alt=${tech.name} class="tech-icon" id=${tech.name}/></li>`;
            }
          })
          .join('')}
        </ul> 
        
        <button class="skills" id="requirements">See requirements</button>
        <ul class="skills-list">
        ${mapData(project.requirements)}
        </ul>
        <div class="project-links">   
        <figure>
        <a href="${project.github}" class="project-link" target="blank" rel="noopener noreferrer">
        <img src="icons/github-icon.png" alt=${project.name} class="social-icon"/>
        <p class="project-in-github">See the code</p>
        </a>
        </figure>
        <figure>
        <a href="${
          project.projectURL
        }" class="project-link" target="blank" rel="noopener noreferrer">
        <span class="link-icon">🔗</span><p class="project-in-github">Check it out</p>
        </a>
        </figure>
        </div>
    </li>`
  ).join('');


