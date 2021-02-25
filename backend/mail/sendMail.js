const path = require('backend/utils/path');

const transporter = require('./mailTransporter.js');
const rootDir = require('../utils/path.js');
const deletePdf = require('./deletePdf.js');

require('dotenv').config();

const mail = process.env.MAIL;

function sendMail(userMail, subject) {
    const mailInfo = {
        from: mail,
        to: userMail,
        subject: subject,
        attachments: [
            {
                filename: 'accesos.pdf',
                path: path.join(rootDir, 'assets', 'pdf', 'accesos.pdf'),
                contentType: 'application/pdf',
            },
        ]
    };

    transporter.sendMail(mailInfo);
    setTimeout(() => {
        deletePdf('accesos.pdf');
    }, 1000);
}

module.exports = sendMail;
