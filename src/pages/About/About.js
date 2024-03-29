import './About.css';
import { PERSONALDATA } from '../../data/personal-data';
import { mapData } from '../../utils/map';
import { LikesList } from '../../components/LikesList/LikesList';

const main = document.querySelector('main');

export const renderAbout = () => {
  document.querySelector('body').classList.remove('body-home');
  main.innerHTML = `
  <h1 class="title">about<span class="parenthesis">( )</span></h1>
  <div class="container" id="about-container">
  <section class="personal-reasons">
  <h3 class="why-title">Why me?</h3>
  <ul class="reasons-list">
${mapData(PERSONALDATA.reasons)}
</ul> 
<h3 class="why-title">Why coding?</h3>
<ul class="reasons-list">
${mapData(PERSONALDATA.insights)}
</ul>              
</section>
  <section class="img-container">
  <h3 class="why-title">I like...</h3>
  ${LikesList}
  </section>
  </div>
  `;
};
