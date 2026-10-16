

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

    console.log("Project found:", project);

}else {
    console.error("Project not found for ID:", projectId);
}






