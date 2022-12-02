//Poovarasan
const express = require('express');
const nodemailer = require('nodemailer'); //use nodemail npm and send to maill access on the mail 2 step verify allow the our mail
console.log(`Wellcome To Mail Send Application `);
const sender = nodemailer.createTransport({
    service: 'gmail', //servies mail type
    host: `smtp.zoho.com`, //send the zoho mail account 
    host: "smtp-mail.outlook.com",
    secure: true,
    port: 465,
    auth: {
        user: "pootesting9@gmail.com",
        pass: `************`
        // pass: "123Anajvnhiqanmjnqts"     //123A create the our mail 2 step verify and ganarete the default password setup the default password 
    }
})

const composemail = {
    from: "pootesting9@gmail.com",
    to: "poovarasan.s@fasoftwares.com,pootesting9@gmail.com",
    subject: 'Hii poo Testing Only ',
    text: "Hello poo Wellcome"
}
sender.sendMail(composemail, function (err, info) {
    if (err) {
        console.log(err);
    } else {
        console.log("mail send successfully" + info.response);
    }
})


