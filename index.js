//Author:Poovarasan
const express = require('express');
const cron = require('node-cron')

const nodemailer = require('nodemailer'); //use nodemail npm and send to maill access on the mail 2 step verify allow the our mail
console.log(`Wellcome To Mail Send Application `);
const sender = nodemailer.createTransport({
    service: `gmail`, //servies mail type and send the all mail type ex:outlook and zoho
    host: `smtp.zoho.com`, //send the zoho mail account 
    host: `smtp-mail.outlook.com`, //additional check perpose add the host
    secure: true,
    port: 465,
    auth: {
        user: `pootesting9@gmail.com`,
        // pass: `************`  // our default mail password
        pass: "123Anajvnhiqanmjnqts"     //123A create the our mail 2 step verify and ganarete the default password setup the default password //remove
    }
})

const composemail = {
    from: `pootesting9@gmail.com`,
    to: `poovarasan.s@fasoftwares.com,pootesting9@gmail.com`,
    subject: `Hii poo Testing Only 1234567 `,
    text: `Hello poo Wellcome`
}
const cronTest = cron.schedule('30s * * * * *', () => {  //auto mail send and time setting function
    sender.sendMail(composemail, function (err, info) {
        if (err) {
            console.log(err);
        } else {
            // const cronTest = cron.schedule('2 * * * * *', () => {  //auto mail send and time setting function and check log 
            // console.log("wellcome to the cron time setup..");
            console.log(`mail send successfully..`);
            console.log(`mail responce code: ${info.response}`);
            // })
        }
    })
})



