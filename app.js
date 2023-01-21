const express = require('express');
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "./public")));
const nodemailer = require('nodemailer');



sendMail = async ()=>{

    const config = {
        port: 587,
        host: process.env.hostt,
        auth: {
            user: process.env.envio,
            pass: process.env.paswordd
        
    }

}
    const mensaje = {
        from:process.env.envio ,
        to: "jose.c.escobar.v@gmail.com",
        subject: 'hola',
        text: "llego"

    }
    const transporter = nodemailer.createTransport(config);

    const info = await transporter.sendMail(mensaje);

    console.log(info)
}

app.post("/send-email",()=>{
    sendMail()
    .then((result)=>res.status(200).send("enviado"))
    .catch((error)=> console.log("error"));
    console.log("mail enviado")
})
app.listen(process.env.PORT || 3000);
console.log(`server is listening on port `, process.env.PORT || 3000);
