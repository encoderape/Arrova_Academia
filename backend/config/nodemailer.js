const nodemailer = require('nodemailer');
const keys = require('./keys');
const createPdf = require('./pdf');

function sendMail(req, res) {
    async function mail(envio) {
        const transporter = nodemailer.createTransport({
            host: 'smtp.arrovacademia.es',
            port: 25,
            secure: false,
            auth: {
                user: keys.mail.email,
                pass: keys.mail.pass
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        createPdf();

        const info = await transporter.sendMail({
            from: 'contacto@arrovacademia.es',
            to: 'rmorenor97@gmail.com',
            subject: 'se envio wey',
            text: envio
        });
    }
    return mail;
}

module.exports = sendMail;
