const express = require("express");
const fetch = require('node-fetch');
const fs = require("fs");
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Importing js files?
const projectsRouter = require("./routes/projects.js");
const contactRouter = require("./routes/contact.js");

// ^use the routers
app.use(contactRouter.router); 
app.use(projectsRouter.router); 

//components
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html", "utf-8");
const header = fs.readFileSync(__dirname + "/public/header/header.html", "utf-8");

//pages
const frontpage = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html", "utf-8");
const projectspage = fs.readFileSync(__dirname + "/public/projects/projects.html", "utf-8");
const contactPage = fs.readFileSync(__dirname + "/public/contact/contact.html", "utf-8");
const skillsPage = fs.readFileSync(__dirname + "/public/skills/skills.html", "utf-8");
const recommendationsPage = fs.readFileSync(__dirname + "/public/recommendations/recommendations.html", "utf-8");
const educationPage = fs.readFileSync(__dirname + "/public/education/education.html", "utf-8");

//Setting up routes
app.get("/", (req, res) => {
    res.send(header + frontpage + footer);
});

app.get("/projects", (req, res) => {
    res.send(header + projectspage + footer);
});

app.get("/contact", (req, res) => {
    res.send(header + contactPage + footer);
});

app.get("/skills", (req, res) => {
    res.send(header + skillsPage + footer);
});

app.get("/recommendations", (req, res) => {
    res.send(header + recommendationsPage + footer);
});

app.get("/education", (req, res) => {
    res.send(header + educationPage + footer);
});

//Starting server
const server = app.listen(process.env.PORT || 8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("server is running on port" + server.address().port);
})












