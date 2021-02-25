const nodemailer = require('nodemailer');

require('dotenv').config();

const host = process.env.HOST;
const mailPort = process.env.MAIL_PORT;
const secure = process.env.MAIL_SECURE;
const mail = process.env.MAIL;
const pass = process.env.PASSWORD;
const tls = process.env.TLS;

const transporter = nodemailer.createTransport(
    {
        host: host,
        port: mailPort,
        secure: secure,
        auth: {
            user: mail,
            pass: pass,
        },
        tls: {
            rejectUnauthorized: tls,
        },
    }
);

module.exports = transporter;
