import './techs-lists.css';
import { PERSONALDATA } from '../data/personal-data';

export const techsList = `
<ul class="techs-list">
${PERSONALDATA.techs.map((tech) => `<li class="tech">
<img src=${tech.icon} alt=${tech.name} class="tech-icon"/>
</li>`).join('')}
</ul> 
`;

export const experienceTechsList = `
<ul class="experience-techs">
<li class="experience-tech">
<img src='../../public/icons/wp-icon.png' alt="Wordpress Icon" class="tech-icon"/>
</li>
<li class="experience-tech">
<img src='../../public/icons/canva-icon.png' alt="Canva Icon" class="tech-icon" id="canva-icon"/>
</li>
<li class="experience-tech" id="sap-icon">
<img src='../../public/icons/sap-icon.png' alt="SAP Icon" class="tech-icon"/>
</li>
<li class="experience-tech">
<img src='../../public/icons/excel-icon.png' alt="Excel Icon" class="tech-icon"/>
</li>
</ul> 
`;
