import { PERSONALDATA } from '../../data/personal-data';
import { mapData } from '../../utils/map';
import './About.css';

const main = document.querySelector('main');

export const renderAbout = () => {
  main.innerHTML = `
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
`;
};
