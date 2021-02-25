const refuerzosBach = require('../models/ecnRefuerzosBachModel.js');
const refuerzosBachPdf = require('../mail/refuerzosBachPdf.js');
const sendMail = require('../mail/sendMail.js');

const controller = {
    create: async (req, res) => {
        try{
            const item = await refuerzosBach.create(req.body);
            await refuerzosBachPdf(item);
            setTimeout(() => {
                sendMail(item.email, `Estudia con nosotros Refuerzos Bachillerato ${item.fullName}`, 'refuerzosbach.pdf');
                res.status(201).send(item);
            }, 2000);
        }catch(err) {
            res.status(400).send(err);
        }
    },
    read: async (req, res) => {
        try{
            const items = await refuerzosBach.find({});
            res.status(200).send(items);
        }catch(err) {
            res.status(400).send(err);
        }
    }
};

module.exports = controller;
