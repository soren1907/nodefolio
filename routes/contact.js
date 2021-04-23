const router = require("express").Router();

router.post("/api/contact", (req,res) => {
    //todo: send email (to yourself) 
    //res.redirect("/");
    console.log(req.body);
    

    res.redirect("/");
});

module.exports = {
    router
}
