const accesos = require('../models/ecnAccesosModel.js');
const accesosPdf = require('../mail/accesosPdf.js');
const sendMail = require('../mail/sendMail.js');

const controller = {
    create: async (req, res) => {
        try {
            const item = await accesos.create(req.body);
            await accesosPdf(item);
            setTimeout(() => {
                sendMail(item.email, `Estudia con nosotros Accesos ${item.fullName}`);
                res.status(201).send(item);
            }, 2000);
        } catch (err) {
            res.status(400).send(err);
        }
    },
    read: async (req, res) => {
        try {
            const items = await accesos.find({});
            res.status(200).send(items);
        } catch (err) {
            res.status(400).send(err)
        }
    }
};

module.exports = controller;
