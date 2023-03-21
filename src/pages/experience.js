import { EXPERIENCIES } from '../data/experiencies-data';

const renderExperience = () => {
    `
    ${EXPERIENCE.forEach((experience) => {
    "I'm lucky for working with brand leaders and institutional references:" 
    experience.logo 
    experience.organization
    experience.organizationURL //enlace a web emp cuando click en los elementos

    experience.position
    experience.date
    
    experience.description
    
    experience.responsabilities.forEach((responsability) => {
    
    })    
    
    })
}
`    
}



renderExperience()

