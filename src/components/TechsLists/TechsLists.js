import './TechsLists.css';
import { PERSONALDATA } from '../../data/personal-data';

export const TechsList = (icons, container) => {
  container.innerHTML = `
  <img src=${PERSONALDATA.image} alt=${PERSONALDATA.name} class="personal-img"/>
  <ul class="techs-list">
${icons
  .map(
    (tech) => `<li class="tech" id=${`projects-tech-${tech.name}`}>
<img src=${tech.icon} alt=${tech.name} class="tech-icon" id=${tech.name} />
</li>`
  )
  .join('')}
  </ul>`;
};

export const ExperienceTechsList = `
<ul class="experience-techs">
<li class="experience-tech">
<img src='/icons/wp-icon.png' alt="Wordpress Icon" class="tech-icon"/>
</li>
<li class="experience-tech">
<img src='/icons/canva-icon.png' alt="Canva Icon" class="tech-icon" id="canva-icon"/>
</li>
<li class="experience-tech" id="sap-icon">
<img src='/icons/sap-icon.png' alt="SAP Icon" class="tech-icon"/>
</li>
<li class="experience-tech" id="excel-icon">
<img src='/icons/excel-icon.png' alt="Excel Icon" class="tech-icon"/>
</li>
</ul> 
`;
