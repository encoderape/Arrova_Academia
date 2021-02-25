const professional = require('../models/ecnProfesionalModel.js');
const profesionalPdf = require('../mail/profesionalPdf.js');
const sendMail = require('../mail/sendMail.js');

const controller = {
    create: async (req, res) => {
        try{
            const item = await professional.create(req.body);
            await profesionalPdf(item);
            setTimeout(() => {
                sendMail(item.email, `Estudia con nosotros Profesional ${item.companyName}`, 'profesional.pdf');
                res.status(201).send(item);
            }, 2000);
        }catch(err) {
            res.status(400).send(err);
        }
    },
    read: async (req, res) => {
        try{
            const items = await professional.find({});
            res.status(200).send(items);
        }catch(err) {
            res.status(400).send(err);
        }
    },
};

module.exports = controller;
