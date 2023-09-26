import './Header.css';
import { PERSONALDATA } from '../../data/personal-data';
import { PersonalProfile } from '../PersonalProfile/PersonalProfile';

export const Header = () => `
<nav class="hide">
<ul class="ul-navbar">
  <li><a href="/home" class="page-link" id="home-link">Beatriz</a></li>
  <li><a href="/projects" class="page-link" id="projects-link">Projects</a></li>
  <li><a href="/experience" class="page-link" id="experience-link">Experience</a></li>
  <li><a href="/about" class="page-link" id="about-link">About</a></li>
</ul>
</nav>   
<span class="mobile-menu" id="mobile-menu">\u2630</span>
<ul class="ul-social">
${PersonalProfile(PERSONALDATA.profiles)}
</ul>
<a href="mailto:${PERSONALDATA.email}">
<button class="contact-button">Contact me</button>
</a>
`;
