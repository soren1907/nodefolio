//fetch("/api/projects").then(res => res.json()).then(console.log);

(async function getProjects() {
    try {
        const response = await fetch("/api/projects");
        const result = await response.json();


        //show result on the projects page in a scalable way (adding new projects)
        const projectsDiv = document.getElementById("projects");

        result.projects.map(project => {

            const projectDiv = document.createElement("div");
            const titleHeader = document.createElement("h2");
            
            titleHeader.classList.add("project-title");
            titleHeader.innerText = project.title;

            const descriptionP = document.createElement("p");
            descriptionP.classList.add("project-description");
            descriptionP.innerText = project.description;

            projectsDiv.appendChild(titleHeader);
            projectsDiv.appendChild(descriptionP);
            projectsDiv.appendChild(projectDiv);
        });


    } catch (error) {
        console.log(error);
    }
    
})();