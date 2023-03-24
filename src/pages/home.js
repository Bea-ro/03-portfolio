import './home.css';
import { PERSONALDATA } from '../data/personal-data';

//animación why me. Meter xq quieres ser developer en Why you?

const main = document.querySelector('main');

{/* <img src=${PERSONALDATA.image} alt="Personal image" class="personal-img" /> */}

export const renderHome = () => {
  main.innerHTML = `
<article>
<div>
<section class="personal-basic">
<h3>${PERSONALDATA.name} ${PERSONALDATA.surname}</h3>           
<h1 class="occupation">${PERSONALDATA.occupation}</h1>
<ul>
${PERSONALDATA.techs.map((tech) => `<li class="reason">${tech}</li>`).join('')
}
</ul> 
<h2 class="personal-description">${PERSONALDATA.description}</h2>
</section>

<section class="personal-secondary">
<p>Based in ${PERSONALDATA.city}</p>
<ul class="ul-social">
<li>
<a href="${PERSONALDATA.githubProfile}" target="blank" rel="noopener noreferrer" class="social-anchor">
<img src="/icons/github-icon.png" alt="GitHub Icon" class="social-icon"/>
</a>
</li>
<li>
<a href="${PERSONALDATA.linkedinProfile}" target="blank" rel="noopener noreferrer" class="social-anchor">
<img src="/icons/linkedin-icon.png" alt="LinkedIn Icon" class="social-icon" />
</a>
</li>
</ul>
</section>               
</div>

<section class="why-container">
<div class="personal-why">
<h2>Why me?</h2>
<ul>
${PERSONALDATA.cuttingEdge.map((reason) => `<li class="reason">${reason}</li>`).join('')
}
</ul> 
</div>

<div class="personal-why">
<h2>Why you?</h2>
<ul>
${PERSONALDATA.insights.map((insight) => `<li class="reason">${insight}</li>`).join('')
}
</ul> 
</div>
</section>              

</article>
`;
};
