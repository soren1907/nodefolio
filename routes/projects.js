const router = require("express").Router();

//create a schema for a project
//there are no rules to how the scheam should look
//but decide what data should be in a project and what datatype it should have

/*
    Project Schema
    Title - (string)
    Description: (string)
    Startdate: (date)
    endDate: (date)
    Language(s): (arrays)
    Tech used: (array)
    Image: (url/string?)
    HotedLik: (string)
    Gitlink: (String)
*/

/* on the projects page fecth all the projects
    from this route below
*/

projects = [{
    title: "Nodefolio sup",
    description: "Personal portfolio implented in node.js",
    startDate: new Date("2021-04-08"),
    endDate: new Date("2022-04-15"),
    gitLink: "......"
}]

router.get("/api/projects", (req,res) => {
    res.send({projects});
});

//just example. not part of project
// router.get("/koalasneeze", (req, res) => {
//     res.send({ sound: "achoooo"});
// });

module.exports = {
    router
}