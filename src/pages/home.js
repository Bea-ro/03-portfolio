import { PERSONALDATA } from '../data/personal-data'
//que salga con alguna animación el why me. Meter xq quieres ser developer

const main = document.querySelector('main')

export const renderHome = () => {
main.innerHTML =
`

${PERSONALDATA.image}
<h3>${PERSONALDATA.name} ${PERSONALDATA.surname}</h3>
           
<h1>${PERSONALDATA.occupation}</h1>
<h2>${PERSONALDATA.description}</h2>
<h2>Why me?${PERSONALDATA.cuttingEdge}</h2>
                        
<p>Based in ${PERSONALDATA.city}</p>

<ul>
<li>
<a href="${PERSONALDATA.githubProfile}">
<img src="/icons/github-icon.png" alt="GitHub Icon" />
</a>
</li>
<li>
<a href="${PERSONALDATA.linkedinProfile}">
<img src="/icons/linkedin-icon.png" alt="LinkedIn Icon" />
</a>
</li>
</ul>

`
}


