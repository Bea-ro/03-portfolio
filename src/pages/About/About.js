import './About.css';
import { PERSONALDATA } from '../../data/personal-data';
import { mapData } from '../../utils/map';
import { LikesList } from '../../components/LikesList/LikesList';
import { handleImgClic } from '../../../main';

const main = document.querySelector('main');

export const renderAbout = () => {
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

  const imgLink = document.querySelector('.personal-img');
  imgLink.addEventListener('click', handleImgClic);
};
