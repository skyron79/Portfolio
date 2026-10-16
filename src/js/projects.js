import data from "../data/projects.json" with { type: "json" };

const projects = data

document.getElementById("projects-names").innerHTML = projects
    .map(project => `
        
            <button class="hero-project-title" id="project-title">
                <a class="project-link"
                data-project="${project.id}" 
                href="project.html?id=${project.id}"> <span>${project.name}</span></a>
                <img src="./assets/icons/arrow_black.svg" alt="Arrow right"> </img>
            </button>
            
    `)
    .join("");

    
const projectLinks = document.querySelectorAll(".project-link");
const projectCovers = document.querySelectorAll(".project-preview");


projectLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        
        const projectId = link.dataset.project;

        projectCovers.forEach(cover => {
      const matches = cover.dataset.project === projectId;
      console.log("Cover:", cover.dataset.project, "matches:", matches);
      cover.classList.toggle("active", matches);})

    });
});

// load up the projects in project page 

console.log("projects.js loaded");