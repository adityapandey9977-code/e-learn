import nodemailer from 'nodemailer'

function forgotPass(email,verifylink)
{
  console.log(email);
  let transporter = nodemailer.createTransport({
  service:'gmail',
  auth: {
    user:'adityapandey9977@gmail.com',
    pass: 'sand hclf wcsi ydjx'
  }
 });

 let mailOptions = {
  from: 'adityapandey9977@gmail.com',
  to: email,
  subject: 'Change Password',
  html: `
  	<h1>Email verification</h1>
  	<p>click below link to change your password</p>
  	<a href= "${verifylink}">Reset password</a>
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

export default forgotPass;
