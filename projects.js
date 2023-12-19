import { projects } from '/data/projectsData.js'

// FUNCTION DECLARATIONS

function createProjectCards(projects){
    const projectCards = []
    projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.classList.add('card');
      projectCard.style.width = '18rem';
      projectCard.innerHTML = `
        <img src="${project.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">${project.description}</p>
          <a href="${project.github_link}" class="btn btn-primary">View on GitHub</a>
      </div>
      `
      projectCards.push(projectCard);
    })
    return projectCards;
}

function renderProjectCards(projectCards){
    projectCards.forEach(projectCard => {
      document.querySelector('.card-group').appendChild(projectCard);
    })
}

// FUNCTION CALLS

document.addEventListener('DOMContentLoaded', () => {
  // Your existing code here
  renderProjectCards(createProjectCards(projects));
});