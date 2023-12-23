import './Home.css';
import { PERSONALDATA } from '../../data/personal-data';
import { TechsList } from '../../components/TechsLists/TechsLists';
import { handleImgClic } from '../../../main';
import { Christmas } from '../../components/Christmas/Christmas';
import { xmasEvent } from '../../utils/christmas-event';

const main = document.querySelector('main');

export const renderHome = () => {
  main.innerHTML = `
  <div class="christmas-icon-container">${Christmas}</div>
  <div class="container" id="home-container">
<section class="personal-info">
<p class="personal-description">${PERSONALDATA.description}</p>
<h3 class="name">< ${PERSONALDATA.name} ${PERSONALDATA.surname} /></h3>           
<h1 class="occupation">${PERSONALDATA.occupation}</h1>
<p class="location">Based in ${PERSONALDATA.city}</p>  
</section>
<section class="img-container">
<img src=${PERSONALDATA.image} alt=${PERSONALDATA.name} class="personal-img"/>
${TechsList}
</section>
</div>
`;

  const imgLink = document.querySelector('.personal-img');
  imgLink.addEventListener('click', handleImgClic);
  const xmasImg = document.querySelector('.christmas-icon');
  const body = document.querySelector('body');
  xmasEvent(xmasImg, body);
};
