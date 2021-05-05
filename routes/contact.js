const router = require("express").Router();
const nodemailer = require("nodemailer");
require("dotenv").config();

router.post("/api/contact", (req,res) => {
    sendContactMail(req.body.name, req.body.email, req.body.subject, req.body.message).catch(console.error);
    res.send({msg: "message sent"});
});

async function sendContactMail(name, email, subject, message) {

    console.log(process.env.MAIL_PROVIDER);
    console.log(process.env.MAIL_PORT);
    console.log(process.env.MAIL);
    console.log(process.env.PASSWORD);

    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_PROVIDER,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL,
            pass: process.env.PASSWORD
        }
    });
  
    let info = await transporter.sendMail({
        from: email, // sender address
        to: process.env.MAIL, 
        subject: subject, // Subject line
        text: message, // plain text body
        html: message, // html body
    });
}

module.exports = {
    router
}
