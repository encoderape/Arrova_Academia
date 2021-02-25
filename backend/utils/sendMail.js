const transporter = require('./mailTransporter.js');

function sendMail(mailInfo) {
    transporter.sendMail(mailInfo);
}

module.exports = sendMail;
