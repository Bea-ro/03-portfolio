import './home.css';
import { PERSONALDATA } from '../data/personal-data';
import { techsList } from '../components/techs-lists';
import { mapData } from '../utils/map';

const main = document.querySelector('main');

export const renderHome = () => {
  main.innerHTML = `
<article>
<div>
<section class="personal-basic">
<h3 class="name">${PERSONALDATA.name} ${PERSONALDATA.surname}</h3>           
<h1 class="occupation">${PERSONALDATA.occupation}</h1>
${techsList}
<h2 class="personal-description">${PERSONALDATA.description}</h2>
</section>

<section class="personal-secondary">
<p>Based in ${PERSONALDATA.city}</p>
<ul class="ul-social">
<li>
<a href="${
    PERSONALDATA.githubProfile
  }" target="blank" rel="noopener noreferrer" class="social-anchor">
<img src="/icons/github-icon.png" alt="GitHub Icon" class="social-icon"/>
</a>
</li>
<li>
<a href="${
    PERSONALDATA.linkedinProfile
  }" target="blank" rel="noopener noreferrer" class="social-anchor">
<img src="/icons/linkedin-icon.png" alt="LinkedIn Icon" class="social-icon" />
</a>
</li>
</ul>
</section>               
</div>

<section class="why-container">
<h3 class="why-title">Why me?</h3>
<ul class="reasons-list">
${mapData(PERSONALDATA.reasons)}
</ul> 
<h3 class="why-title">Why coding?</h3>
<ul class="reasons-list">
${mapData(PERSONALDATA.insights)}
</ul> 
</section>              
</article>
`;
};
