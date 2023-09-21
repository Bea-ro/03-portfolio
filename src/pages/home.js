import './home.css';
import { PERSONALDATA } from '../data/personal-data';
import { mapData } from '../utils/map';
import { PersonalProfile } from '../components/PersonalProfile';
import { TechsList } from '../components/TechsLists';

const main = document.querySelector('main');

export const renderHome = () => {
  main.innerHTML = `
  <div class="container">
  <article>
<section class="personal-basic">
<h3 class="name">${PERSONALDATA.name} ${PERSONALDATA.surname}</h3>           
<h1 class="occupation">${PERSONALDATA.occupation}</h1>
${TechsList}
<h2 class="personal-description">${PERSONALDATA.description}</h2>
</section>

<section class="personal-secondary">
<p>Based in ${PERSONALDATA.city}</p>
<ul class="ul-social">
${PersonalProfile(PERSONALDATA.profiles)}
</ul>
</section>               
</article>

<aside class="why-container">
<h3 class="why-title">Why me?</h3>
<ul class="reasons-list">
${mapData(PERSONALDATA.reasons)}
</ul> 
<h3 class="why-title">Why coding?</h3>
<ul class="reasons-list">
${mapData(PERSONALDATA.insights)}
</ul> 
</aside>             
</div>
`;
};
