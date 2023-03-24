import './projects.css';
import { PROJECTS } from '../data/projects-data';

const main = document.querySelector('main');

export const renderProjects = () => {
  main.innerHTML = `
  <h3 class="title">My first projects</h3>
  <ul class="projects-list">
${PROJECTS.map((project) => `
<li class="project-card">
    <a href=${project.projectURL}>
    <figure class="project-img-title">
    <img src="${project.image}" alt=${project.name} />
    <h1>${project.name}</h1>
    </figure>
    </a>
    
    <div>
    <span>${project.techs.join(', ')}</span>
    <span class="skills">Skills</span>
    <ul>
    ${project.requirements.map((requirement) => `<li>${requirement}</li>`).join('')}
    </ul>
    <p>${project.date}</p>
    <p>${project.description}</p>
    </div>

    <figure>
    <a href="${project.github}" class="project-github-link">
    <img src="icons/github-icon.png" alt=${project.name} class="social-icon"/>
    <p>Project in GitHub</p>
    </a>
    </figure>

</li>
`).join('')}
</ul> 
`;
};
