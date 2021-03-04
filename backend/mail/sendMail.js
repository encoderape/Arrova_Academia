const path = require('path');

const transporter = require('./mailTransporter.js');
const rootDir = require('../utils/path.js');
const deletePdf = require('./deletePdf.js');

require('dotenv').config();

const mail = process.env.MAIL;

function sendMail(subject, fileName, userMail = mail) {
    const mailInfo = {
        from: mail,
        to: userMail,
        subject: subject,
        attachments: [
            {
                filename: fileName,
                path: path.join(rootDir, 'assets', 'pdf', fileName),
                contentType: 'application/pdf',
            },
        ]
    };

    transporter.sendMail(mailInfo);
    setTimeout(() => {
        deletePdf(fileName);
    }, 1000);
}

module.exports = sendMail;
