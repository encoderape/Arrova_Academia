const information = require('../models/informationModel.js');

const controller = {
    create: async (req, res) => {
        try{
            const item = await information.create(req.body);
            res.status(201).send(item);
        }catch(err) {
            res.status(500).send(err);
        }
    },

    read: async (req, res) => {
        try{
            const item = await information.find({});
            res.status(201).send(item);
        }catch(err) {
            res.status(500).send(err);
        }
    },

    readById: async (req, res) => {
        try{
            const item = await information.findById(req.params.id);
            res.status(201).send(item);
        }catch(err) {
            res.status(404).send(err);
        }
    },

    updateById: async (req, res) => {
        try{
            const item = await information.findByIdAndUpdate(req.params.id, req.body);
            res.sendStatus(201);
        }catch(err) {
            res.status(404).send(err);
        }
    },

    deleteById: async (req, res) => {
        try{
            const item = await information.findByIdAndDelete(req.params.id);
            res.sendStatus(201);
        }catch(err) {
            res.status(404).send(err);
        }
    }
};

module.exports = controller;