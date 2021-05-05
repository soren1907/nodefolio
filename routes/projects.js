const router = require("express").Router();

projects = [
    {
        title: "Nodefolio",
        description: "Mandatory 2, node.js",
        class: "node.js",
        startDate: new Date("2021-04-07"),
        endDate: new Date("2021-05-09"),
        gitLink: "github.link",
        languages: ["Javascript", "HTML", "CSS", "JSON"]
    },
    {
        title: "Learning Documentation",
        description: "Mandatory 1, node.js",
        class: "node.js",
        startDate: new Date("2021-02-25"),
        endDate: new Date("2021-03-24"),
        gitLink: "github.link",
        languages: ["Javascript", "HTML", "CSS", "JSON"]
    },
    {
        title: "Examsproject",
        description: "Webapp made for the exam with node js",
        class: "node.js",
        startDate: new Date("2021-05-07"),
        endDate: new Date("2021-06-15"),
        gitLink: "Not available yet",
        languages: ["Javascript", "HTML", "CSS", "JSON", "DB-languge (not decided)"]
    }
]

router.get("/api/projects", (req,res) => {
    res.send({projects});
});

module.exports = {
    router
}