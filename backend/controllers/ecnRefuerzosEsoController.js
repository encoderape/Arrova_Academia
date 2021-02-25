const refuerzosEso = require('../models/ecnRefuerzosEsoModel.js');
const refuerzosEsoPdf = require('../mail/refuerzosEsoPdf.js');
const sendMail = require('../mail/sendMail.js');

const controller = {
    create: async (req, res) => {
        try{
            const item = await refuerzosEso.create(req.body);
            await refuerzosEsoPdf(item);
            setTimeout(() => {
                sendMail(item.email, `Estudia con nosotros Refuerzos Eso ${item.fullName}`, 'refuerzoseso.pdf');
                res.status(201).send(item);
            }, 2000);
        }catch(err) {
            res.status(400).send(err);
        }
    },
    read: async (req, res) => {
        try{
            const items = await refuerzosEso.find({});
            res.status(200).send(items);
        }catch(err) {
            res.status(400).send(err);
        }
    }
};

module.exports = controller;
