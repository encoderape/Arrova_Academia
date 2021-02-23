const accesos = require('../models/ecnAccesosModel.js');
const sendMail = require('../config/nodemailer.js');

const controller = {
    create: async (req, res) => {
        try{
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
