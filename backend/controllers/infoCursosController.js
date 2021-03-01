const infoCursos = require('../models/infoCursosModel.js');

const controller = {
    create: async (req, res) => {
        try{
            let item = await infoCursos.create(req.body);
            res.status(201).send(item);
        }catch(err) {
            res.status(400).send(err);
        }
    },
    read: async (req, res) => {
        try{
            let items = await infoCursos.find({});
            res.status(200).send(items);
        }catch(err) {
            res.status(400).send(err);
        }
    },
    readById: async (req, res) => {
        try{
            let item = await infoCursos.findById(req.params.id);
            res.status(200).send(item);
        }catch(err) {
            res.status(404).send(err);
        }
    },
    update: async (req, res) => {
        try{
            await infoCursos.findByIdAndUpdate(req.params.id, req.body);
            res.sendStatus(200);
        }catch(err) {
            res.status(404).send(err);
        }
    },
    delete: async (req, res) => {
        try{
            await infoCursos.findByIdAndDelete(req.params.id);
            res.sendStatus(200);
        }catch(err) {
            res.status(404).send(err);
        }
    }
};

module.exports = controller;
