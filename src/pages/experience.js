import { EXPERIENCIES } from '../data/experiencies-data';

const main = document.querySelector('main')

export const renderExperience = () => {
    main.innerHTML =
    `
    I'm lucky of working with brand leaders and institutional references:
    
    ${EXPERIENCIES.forEach((experience) => {
    
    `
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
    ${experience.responsabilities.forEach((responsability) => {
        `<li>${responsability}</li>`
    })}
    </ul>
    </div>
    `
    })
}
`    
}

