const refuerzosUni = require('../models/ecnRefuerzosUniModel.js');
const refuerzosUniPdf = require('../mail/refuerzosUniPdf.js');
const sendMail = require('../mail/sendMail.js');

require('dotenv').config();

const mail = process.env.MAIL;

const controller = {
    create: async (req, res) => {
        try{
            const item = await refuerzosUni.create(req.body);
            await refuerzosUniPdf(item);
            setTimeout(() => {
                sendMail(mail, `Estudia con nosotros Refuerzos Uni ${item.fullName}`, 'refuerzosuni.pdf');
                res.status(201).send(item);
            }, 2000);
        }catch(err) {
            res.status(400).send(err);
        }
    },
    read: async (req, res) => {
        try{
            const items = await refuerzosUni.find({});
            res.status(200).send(items);
        }catch(err) {
            res.status(400).send(err);
        }
    }
};

module.exports = controller;
