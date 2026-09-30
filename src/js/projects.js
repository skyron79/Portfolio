import projects from './projects.js';

const projectsContainer = document.querySelector('.projects-container');

projects.forEach(project => {
  const projectCard = document.createElement('div');
  projectCard.classList.add('project-card');
  projectsContainer.appendChild(projectCard);

  projectCard.innerHTML = `
                <div class="projects-container">
                    <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                    </div>
                    <div><h3>${project.title}</h3>
                    <p>${project.description}</p>
                    </div>
                    <div class="bullet-container">
                    <span  class="bullet"> UX/UI Design</span>
                    <span  class="bullet"> UX/UI Design</span>
                    </div>
                </div>
  `;
});