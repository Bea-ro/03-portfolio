export const rain = () => {
  const amount = 200;
  const rainContainer = document.querySelector('.rain-container');
  let i = 0;

  while (i < amount) {
    const drop = document.createElement('i');

    const size = Math.random() * 5;
    const poxX = Math.floor(Math.random() * window.innerWidth);
    const delay = Math.random() * -20;
    const duration = Math.random() * 5;

    drop.style.width = `${0.2 + size}px`;
    drop.style.left = `${poxX}px`;
    drop.style.animationDelay = `${delay}s`;
    drop.style.animationDuration = `${1 + duration}s`;

    rainContainer.appendChild(drop);
    i++;
  }
  document.querySelector('body').className = 'body-home';
};
