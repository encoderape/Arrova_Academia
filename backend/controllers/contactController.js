const contact = require('../models/contactModel.js');
const contactPdf = require('../mail/contactPdf.js');
const sendMail = require('../mail/sendMail.js');

require('dotenv').config();

const mail = process.env.MAIL;

const controller = {
    create: async (req, res) => {
        try {
            const item = await contact.create(req.body);
            await contactPdf(item);
            setTimeout(() => {
                sendMail(mail, `Contacto ${item.fullName}`, 'contact.pdf');
                res.status(201).send(item);
            }, 2000);
        } catch (err) {
            res.status(400).send(err);
        }
    },
    read: async (req, res) => {
        try {
            const items = await contact.find({});
            res.status(200).send(items);
        } catch (err) {
            res.status(400).send(err);
        }
    }
}

module.exports = controller;
