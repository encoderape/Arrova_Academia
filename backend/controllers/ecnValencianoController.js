const valenciano = require('../models/encValencianoModel.js');
const valencianoPdf = require('../mail/valencianoPdf.js');
const sendMail = require('../mail/sendMail.js');

const controller = {
    create:  async (req, res) => {
        try{
            const item = await valenciano.create(req.body);
            await valencianoPdf(item);
            setTimeout(() => {
                sendMail(item.email, `Estudia con nosotros Valenciano ${item.fullName}`, 'valenciano.pdf');
                res.status(201).send(item);
            }, 2000);
        }catch(err) {
            res.status(400).send(err);
        }
    },
    read: async (req, res) => {
        try{
            const items = await valenciano.find({});
            res.status(200).send(items);
        }catch(err) {
            res.status(400).send(err);
        }
    }
};

module.exports = controller;
