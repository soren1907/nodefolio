(async function getProjects() {
    try {
        const response = await fetch("/api/projects");
        const results = await response.json();

        //getting hardcoded div from html page
        const projectsDiv = document.getElementById("projects");

        results.projects.map(project => {

            //creating elements
            const newDiv = document.createElement("div");
            const titleHeader = document.createElement("h2");
            const descriptionP = document.createElement("p");
            const projectClass = document.createElement("p");
            const startDate = document.createElement("p");
            const endDate = document.createElement("p");
            const gitLink = document.createElement("p");
            const languages = document.createElement("nav");

            //giving elements class names
            titleHeader.classList.add("project-title");
            descriptionP.classList.add("project-description");
            projectClass.classList.add("project-class");
            startDate.classList.add("start-date");
            endDate.classList.add("end-date");
            gitLink.classList.add("git.link");
            languages.classList.add("languages");

            //append data to elements
            titleHeader.innerText = project.title;
            descriptionP.innerText = "Description: " + project.description;
            projectClass.innerText = "Class related to project: " + project.class;
            const startDateObj = new Date(project.startDate);
            startDate.innerText = "Start-date: " + startDateObj.toDateString();
            const endDateObj = new Date(project.endDate);
            endDate.innerText = "End-date: " + endDateObj.toDateString();
            gitLink.innerText = "Link to github: " + project.gitLink;

            //append data from JS-list to HTML-list
            const liHead = document.createElement('p');
            liHead.innerText = "Languages: ";
            languages.appendChild(liHead);
            project.languages.map(lang => {
                const li = document.createElement('li');
                languages.appendChild(li);
                li.innerHTML += lang;
            });
        
            //appending elements to new div and in the end to the hardcoded div
            newDiv.appendChild(titleHeader);
            newDiv.appendChild(descriptionP);
            newDiv.appendChild(projectClass);
            newDiv.appendChild(startDate);
            newDiv.appendChild(endDate);
            newDiv.appendChild(languages);
            newDiv.appendChild(gitLink);
            projectsDiv.appendChild(newDiv);
        });
    } catch (error) {
        console.log(error);
    } 
})();