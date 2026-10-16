

import data from "../data/projects.json" with { type: "json" };



const projects = data;

// get id from the url
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get("id");
console.log("Project ID from URL:", projectId);

const project = projects.find(project => project.id === Number(projectId));

if(project) {

    document.querySelector("#project-title").innerHTML = project.name;

    const teamContainer = document.querySelector("#team-members");

    project.team.forEach(member => {

        const link = document.createElement("a");
        link.href = member.website;
        link.textContent = member.name;

        teamContainer.appendChild(link);
    })
    
    const roleContainer = document.querySelector("#project-role");
    project.roles.forEach(role => {

        const roleSpan = document.createElement("span");
        const br = document.createElement("br");
        roleSpan.textContent = role.role;
        roleContainer.appendChild(roleSpan);
        roleContainer.appendChild(br);


    })
   

    document.querySelector("#project-year").innerHTML = project.year;
    document.querySelector("#project-description").innerHTML = project.description;
    document.querySelector("#project-solutions").innerHTML = project.solutions;
    document.querySelector("#project-challenge").innerHTML = project.challenges;
    document.querySelector("#project-results").innerHTML = project.results;

    document.querySelector("#thumbnail").src = project.thumbnail;
    document.querySelector("#thumbnail").alt = `${project.name} project preview`;

    console.log("Project found:", project);

}else {
    console.error("Project not found for ID:", projectId);
}


// get back and next buttons and change the url to the previous and next project
const backButton = document.querySelector("#back-button");
const nextButton = document.querySelector("#next-button");

if (backButton && nextButton) {

    const currentIndex = projects.findIndex(project => project.id === Number(projectId));
    
    console.log("Current project index:", currentIndex + 1 );
    
    if (currentIndex > 0) {
        backButton.addEventListener("click", () => {
            console.log("Navigating to previous project:", projects[currentIndex-1].id);
            window.location.href = `project.html?id=${projects[currentIndex-1].id}`;
        });
    } else {
        backButton.style.display = "none";
    }

    if (currentIndex < projects.length - 1) {
        nextButton.addEventListener("click", () => {
            console.log("Navigating to next project:", projects[currentIndex+1].id);
            window.location.href = `project.html?id=${projects[currentIndex+1].id}`;
            
        });

    } else {
        nextButton.style.display = "none";
    }


}
