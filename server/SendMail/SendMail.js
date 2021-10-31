const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv');
dotenv.config({path:'/home/prakharojha/Desktop/ME/port-O-Health/server/.env'});


const sendEmail = (to) => {
    sgMail.setApiKey(process.env.TWILIO_API_KEY);
console.log(process.env.TWILIO_API_KEY);
    const msg = {
        to:to,
        from:"prakhar.ojha@cmselearning.org",
        subject:"Sending with SendGrid is fun",
        text:" and easy to do anywhere",
        html:"<strong>and easy to do anywhere</strong>"
    };
    
    sgMail.send(msg);
    
}

module.exports= sendEmail;