import { TechsList } from '../components/TechsLists/TechsLists';
import { xmasIcons } from '../data/christmas-data';
import { rain } from './christmas-animation';

const xmasIconHandle = (xmasImg, body) => {
  const index = xmasIcons.findIndex((icon) => icon.name === xmasImg.alt);
  if (index < xmasIcons.length - 1) {
    xmasImg.src = xmasIcons[index + 1].icon;
    xmasImg.alt = xmasIcons[index + 1].name;
  } else {
    document.querySelector('.name').innerText = '< Merry Christmas />';
    document.querySelector('.personal-description').innerText = 'I wish you';
    document.querySelector('.occupation').innerText = 'and a happy new year';
    document.querySelector('.location').hidden = true;
    xmasImg.hidden = true;
    const imgContainer = document.querySelector('.img-container');
    TechsList([...xmasIcons, ...xmasIcons], imgContainer);
    const icons = document.querySelectorAll('.tech-icon');
    icons.forEach((icon) => {
      icon.style.width = '50px';
      icon.style.height = '50px';
    });
    rain();
  }

  const xmasImgWidth = xmasImg.getBoundingClientRect().width;
  const xmasImgHeight = xmasImg.getBoundingClientRect().height;
  const docWidth = body.getBoundingClientRect().width;
  const docHeight = body.getBoundingClientRect().height;
  const posX = (Math.random() * (docWidth - xmasImgWidth)).toFixed();
  const posY = (Math.random() * (docHeight - xmasImgHeight)).toFixed();
  xmasImg.style.left = `${posX}px`;
  xmasImg.style.top = `${posY}px`;
};

export const xmasEvent = (xmasImg, body) => {
  xmasImg.addEventListener('click', () => xmasIconHandle(xmasImg, body));
};
