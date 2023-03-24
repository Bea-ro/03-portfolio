import './projects.css';
import { PROJECTS } from '../data/projects-data';

const main = document.querySelector('main');

export const renderProjects = () => {
  main.innerHTML = `
  <ul class="projects-list">
${PROJECTS.map((project) => `
<li class="project-card">
    <a href=${project.projectURL}>
    <figure>
    <img src="${project.image}" alt=${project.name} />
    <h1>${project.name}</h1>
    </figure>
    </a>
    
    <div>
    <p>${project.techs.join(', ')}</p>
    <ul>
    ${project.requirements.map((requirement) => `<li>${requirement}</li>`).join('')}
    </ul>
    <p>${project.date}</p>
    <p>${project.description}</p>
    </div>

    <figure>
    <a href="${project.github}">
    <img src="icons/github-icon.png" alt=${project.name} class="social-icon"/>Project in GitHub
    </a>
    </figure>

</li>
`).join('')}
</ul> 
`;
};
