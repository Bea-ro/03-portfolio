const showSkills = (event) => {
  event.target.closest('.card').querySelector('.skills-list').classList.toggle('show-ev');
  const skillsButton = event.target.closest('.card').querySelector('.skills');
  if (skillsButton.innerHTML === 'Hide requirements') {
    skillsButton.innerHTML = 'See requirements';
  } else if (skillsButton.innerHTML === 'See requirements') {
    skillsButton.innerHTML = 'Hide requirements';
  } else if (skillsButton.innerHTML === 'Hide responsabilities') {
    skillsButton.innerHTML = 'See responsabilities';
  } else if (skillsButton.innerHTML === 'See responsabilities') {
    skillsButton.innerHTML = 'Hide responsabilities';
  }
};

export const skillsToggle = () => {
  const skillsButtons = document.querySelectorAll('.skills');
  skillsButtons.forEach((skillButton) => skillButton.addEventListener('click', showSkills));
};
