const express = require('express');
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "./public")));
const nodemailer = require('nodemailer');

sendMail = async (req, res) => {
    
    const transporter = nodemailer.createTransport({
        port: 465,
        host: process.env.hostt,
        auth: {
            user: process.env.envio,
            pass: process.env.paswordd
        },
        secure: true,
    });
    
    const mailData = {
        from:process.env.envio ,
        to: "yosoytfk@gmail.com",
        subject: 'hola',
        text: "llego",
    };
    
    res.status(200).json({ status: "OK" });
    };
    app.post("/send-email",(req,res)=>{
        sendMail()
        .then((result)=>res.status(200).send("enviado"))
        .catch((error)=> console.log("error"));
        console.log("mail enviado")
    })


app.listen(process.env.PORT || 3000);
console.log(`server is listening on port `, process.env.PORT || 3000);
