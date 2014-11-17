var nodemailer = require('nodemailer');
var transport = nodemailer.createTransport('Pickup', {
  directory: __dirname + '/../tmp'
});

module.exports = {
  welcome: function(user) {
    transport.sendMail({
      to: user.email,
      from: 'alex@example.com',
      subject: 'Welcome!',
      text: 'Hello, your account has been created.'
    }, function(err, res) {
      if (err) {
        console.error('Error sending email', err);
      } else {
        console.log('Email sent:', res);
      }
    });
  }
};
