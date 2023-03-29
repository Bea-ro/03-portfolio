const showSkills = (event) => {
  event.target.closest('.card').querySelector('.skills-list').classList.toggle('show-ev');
};

export const skillsToggle = () => {
  const skillsButtons = document.querySelectorAll('.skills');
  skillsButtons.forEach((skillButton) => skillButton.addEventListener('click', showSkills));
};
