const matricula = require('../models/matriculaModel.js');
const user = require('../models/userModel.js');
const matriculaPdf = require('../mail/matriculaPdf.js');
const matriculaUserPdf = require('../mail/matriculaUserPdf.js');
const sendMail = require('../mail/sendMail.js');

const controller = {
    create: async (req, res) => {
        try{
            const item = await matricula.create(req.body);
            const itemUser = await user.findById(item.userId);
            console.log(itemUser);
            await matriculaPdf(item, itemUser);
            await matriculaUserPdf();
            setTimeout(() => {
                sendMail(`Matricula ${user.name}`, 'matricula.pdf');
                sendMail(`Bienvenido a tu nuevo curso`, 'matriculaUser.pdf', itemUser.email);
                res.status(201).send(item);
            }, 2000);
        }catch(err) {
            res.status(400).send(err);
        }
    },
    read: async (req, res) => {
        try{
            const items = await matricula.find({});
            res.status(200).send(items);
        }catch(err) {
            res.status(400).send(err);
        }
    },
    readById: async (req, res) => {
        try{
            const item = await matricula.findById(req.params.id);
            res.status(200).send(item);
        }catch(err) {
            res.status(404).send(err);
        }
    },
    update: async (req, res) => {
        try{
            await matricula.findByIdAndUpdate(req.params.id, req.body);
            res.sendStatus(200);
        }catch(err) {
            res.status(404).send(err);
        }
    },
    delete: async (req, res) => {
        try{
            await matricula.findByIdAndDelete(req.params.id);
            res.sendStatus(200);
        }catch(err) {
            res.status(404).send(err);
        }
    }
};

module.exports = controller;
