import './home.css';
import { PERSONALDATA } from '../data/personal-data';
import { techsList } from '../components/techs-lists';
import { personalProfile } from '../components/personal-profile';
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
${personalProfile(PERSONALDATA.profiles)}
</ul>
</section>               
</div>

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

</article>             
`;
};
