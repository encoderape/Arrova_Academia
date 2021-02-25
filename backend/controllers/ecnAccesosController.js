const accesos = require('../models/ecnAccesosModel.js');
const mail = require('../config/nodemailer.js');
const createPdf = require('../utils/pdf/pdfAccesos.js');

const controller = {
    create: async (req, res) => {
        try{
            const item = await accesos.create(req.body);
            createPdf(item);
            mail();
            res.status(201).send(item);
        }catch(err) {
            res.status(400).send(err);
        }
    },
    read: async (req, res) => {
        try{
            const items = await accesos.find({});
            res.status(200).send(items);
        }catch(err) {
            res.status(400).send(err)
        }
    }
};

module.exports = controller;
