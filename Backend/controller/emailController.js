import nodemailer from 'nodemailer'

function sendMail(email,verifylink)
{
  let transporter = nodemailer.createTransport({
  service:'gmail',
  auth: {
    user:'adityapandey9977@gmail.com',
    pass: 'sand hclf wcsi ydjx'
  }
 });

 let mailOptions = {
  from: 'adityapander9977@gmail.com',
  to: email,
  subject: 'verify your account',
  html: `
  	<h1>Email verification</h1>
  	<p>click below link to verify your account</p>
  	<a href= "${verifylink}">verfiy email</a>
  `
 };

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

}

export default sendMail;
