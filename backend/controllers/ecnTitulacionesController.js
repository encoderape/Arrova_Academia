const titulaciones = require('../models/ecnTitulacionesModel.js');
const titulacionesPdf = require('../mail/titulacionesPdf.js');
const sendMail = require('../mail/sendMail.js');

const controller = {
    create: async (req, res) => {
        try{
            const item = await titulaciones.create(req.body);
            await titulacionesPdf(item);
            setTimeout(() => {
                sendMail(`Estudia con nosotros Titulaciones ${item.fullName}`, 'titulaciones.pdf');
                res.status(201).send(item);
            }, 2000);
        }catch(err) {
            res.status(400).send(err);
        }
    },
    read: async (req, res) => {
        try{
            const items = await titulaciones.find({});
            res.status(200).send(items);
        }catch(err) {   
            res.status(400).send(err);
        }
    }
};

module.exports = controller;
