import { PROJECTS } from '../data/projects-data'

const main = document.querySelector('main')

export const renderProjects = () => {

PROJECTS.forEach((project)=> {
    main.innerHTML =
    `
    <a href="${project.projectURL}">
    <figure>
    <img src="${project.image}" alt=${project.name} />
    <h1>${project.name}</h1>
    </figure>
    </a>
    
    <div>
    <p>${project.tech}</p>
    <p>${project.date}</p>
    <p>${project.description}</p>
    <ul>
    ${project.requirements.forEach((requirement) => {
        `<li>${requirement}</li>`
    })}
    </ul>
    </div>
    <a href="${project.github}">
    <figure>
    <img src="../../public/icons/github-icon" alt=${project.name} Project in GitHub/>
    </figure>
    </a>
    `
})  
  
}