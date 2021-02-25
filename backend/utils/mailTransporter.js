const nodemailer = require('nodemailer');

require('dotenv').config();

const host = process.env.HOST;
const mailPort = process.env.MAIL_PORT;
const mail = process.env.MAIL;
const pass = process.env.PASSWORD;
const ciphers = process.env.CIPHERS;

const transporter = nodemailer.createTransport(
    {
        host: host,
        port: mailPort,
        secure: false,
        auth: {
            user: mail,
            pass: pass,
        },
        tls: {
            rejectUnauthorized: false,
            ciphers: ciphers,
        },
    }
);

module.exports = transporter;
