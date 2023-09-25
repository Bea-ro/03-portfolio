import './Home.css';
import { PERSONALDATA } from '../../data/personal-data';
import { TechsList } from '../../components/TechsLists/TechsLists';

const main = document.querySelector('main');

export const renderHome = () => {
  main.innerHTML = `
  <div class="container">

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
};

