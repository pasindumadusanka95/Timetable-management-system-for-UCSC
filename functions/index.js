const functions = require('firebase-functions');
const admin = require('firebase-admin')
const nodemailer = require('nodemailer')

admin.initializeApp()

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'aucsc321@gmail.com',
        pass: 'Projectadmin123'
    }
});

exports.sendMail = functions.firestore.document('messages/{document}').onCreate(event => {

    const dest = "pasindusenerath@gmail.com";
    // const emailFrom = event.data().email;
    // const message = event.data().message;
    // const name = event.data().name;
    // const subject = event.data().subject;


    const mailOption = {
        from: 'Project Admin <pasindusenerath@gmail.com>',
        to: dest,
        subject: subject,
        html: `<h2> You have recieved new message </h2>
                <p> <b>email:</b> ${emailFrom} </p>
                <p> <b>name: </b> ${name}</p>
                <p> <b>subject: </b> ${subject}</p>
                <p> <b>message: </b> ${message}</p>`
    }

    return transporter.sendMail(mailOption, (err, info) => {
        if(err){
            console.log('Error'+ err)
            return;
        }else{
            console.log('message Sent')
            return
        }
    })
})