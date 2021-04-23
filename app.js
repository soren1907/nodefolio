const express = require("express");
const fetch = require('node-fetch');
const fs = require("fs");
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// How do i import projects.js?
const projectsRouter = require("./routes/projects.js");
const contactRouter = require("./routes/contact.js");

app.use(contactRouter.router); //app use the projectrouter
app.use(projectsRouter.router); 


// Server-side rendering 
// read the html file as text
// send the text content to the client

//in node there are 2 ways to read a file
// async : correct 99.9% of the time
// sync : <- use this here cause its not a problem that the server is blocked when it starts
// cause we need the html before the routes should be accessible anyway

// task: serve the front page by server-side rendering it
//components
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html", "utf-8");
const header = fs.readFileSync(__dirname + "/public/header/header.html", "utf-8");

//pages
const frontpage = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html", "utf-8");
const projectspage = fs.readFileSync(__dirname + "/public/projects/projects.html", "utf-8");
const contactPage = fs.readFileSync(__dirname + "/public/contact/contact.html", "utf-8");

app.get("/", (req, res) => {
    res.send(header + frontpage + footer);
});

app.get("/projects", (req, res) => {
    res.send(header + projectspage + footer);
});

app.get("/contact", (req, res) => {
    res.send(header + contactPage + footer);
});

// app.get("/projects/....", (req,res) => {

// });

const server = app.listen(process.env.PORT || 8081, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("server is running on port" + server.address().port);
})












