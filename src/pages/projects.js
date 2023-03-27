import './projects.css';
import { PROJECTS } from '../data/projects-data';
import { PERSONALDATA } from '../data/personal-data';

const main = document.querySelector('main');

export const renderProjects = () => {
  main.innerHTML = `
  <h1 class="title">My first projects</h1>
  <ul class="projects-list">
${PROJECTS.map(
  (project) => `
<li class="project-card">
    <a href=${project.projectURL}>
    <figure class="project-img-title">
    <img src="${project.image}" alt=${project.name} class="project-img"/>
    <h2 class="project-title">${project.name}</h2>

   </figure>
    </a>
    
    <div class="project-areas">
    <ul class="project-techs-list">
    ${PERSONALDATA.techs
      .map((tech) => {
        if (project.techs.includes(tech.name)) {
          return `<li class="tech"><img src=${tech.icon} alt=${tech.name} class="tech-icon"/></li>`;
        }
      })
      .join('')}
    </ul> 
    <button class="skills">See requirements</button>
    </div>
    <ul class="requirements-list">
    ${project.requirements
      .map((requirement) => `<li class="requirement"> ${requirement}</li>`)
      .join('')}
    </ul>
    
    <div>
    <p>${project.description}</p>
    <p class="date">${project.date}</p>
   </div>
    <figure>
    <a href="${project.github}" class="project-github-link">
    <img src="icons/github-icon.png" alt=${project.name} class="social-icon"/>
    <p>Project in GitHub</p>
    </a>
    </figure>

</li>
`
).join('')}
</ul> 
`;

  const showSkills = (event) => {
    const projectCard = event.target.closest('.project-card');
    projectCard.querySelector('.requirements-list').classList.toggle('show');
  };

  const skillsButtons = document.querySelectorAll('.skills');

  skillsButtons.forEach((skillButton) => skillButton.addEventListener('click', showSkills));
};
