var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: "london.mxroute.com",
    port: 587,
    auth: {
        user: 'STUB%',
        pass: 'STUB%'
    }
});

var mailOptions = {
  from: 'STUB%',
  to: 'STUB%',
  subject: 'Testing a node payload',
  text: 'banana'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
