const nodemailer = require('nodemailer');
const path = require('path');
const keys = require('./keys');

async function mail() {
    const transporter = await nodemailer.createTransport({
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

    const info = {
        from: 'contacto@arrovacademia.es',
        to: 'rmorenor97@gmail.com',
        subject: 'se envio wey',
        attachments: [
            {
                filename: 'accesos.pdf',
                path: path.join(__dirname, '../accesos.pdf'),
                contentType: 'application/pdf'
            }]
    };

    await transporter.sendMail(info, (error, info) => {
        if(error) {
            console.log(error);
        }else {
            console.log('correo enviado');
        }
    });
};

module.exports = mail;
