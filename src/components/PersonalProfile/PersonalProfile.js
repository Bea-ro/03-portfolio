import './PersonalProfile.css';

export const PersonalProfile = (profiles) => profiles.map((profile) => `
<li>
<a href=${profile.link} target="blank" rel="noopener noreferrer" class="social-anchor">
<img src=${profile.icon} alt=${profile.name} class="social-icon" id=${profile.name}/>
<span>${profile.name}</span>
</a>
</li>
`).join('');
