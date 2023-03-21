import { PERSONALDATA } from '../data/personal-data'
import githubIcon from '/public/icons/github-icon.svg';
import linkedinIcon from '/public/icons/linkedin-icon.svg'

//que salga con alguna animación el why me

const renderHome = () => {
`
${personalData.image}
<h3>${personalData.name} ${personalData.surname}</h3>
           
<h1>${personalData.occupation}</h1>
<h2>${personalData.description}</h2>
<h2>Why me?${personalData.cuttingEdge}</h2>
                        
<p>Based in ${personalData.city}</p>

<ul>
<li>
<a href="${personalData.githubProfile}">
<img src="${githubIcon}" alt="GitHub Icon" />
</a>
</li>
<li>
<a href="${personalData.linkedinProfile}">
<img src="${linkedinIcon}" alt="LinkedIn Icon" />
</a>
</li>
</ul>

`
}

renderHome() 


