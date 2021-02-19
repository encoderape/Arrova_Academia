const news = require('../models/newsModel.js');

const controller = {
    create: async (req, res) => {
        try{
            const item = await news.create(req.body);
            res.status(201).send(item);
        }catch(err) {
            res.status(400).send(err);
        }
    },

    read: async (req, res) => {
        try{
            const item = await news.find({});
            res.status(201).send(item);
        }catch(err) {
            res.status(400).send(err);
        }
    },

    readById: async (req, res) => {
        try{
            const item = await news.findById(req.params.id);
            res.status(200).send(item);
        }catch(err) {
            res.status(404).send(err);
        }
    },

    updateById: async (req, res) => {
        try{
            const item = await news.findByIdAndUpdate(req.params.id, req.body);
            res.sendStatus(200);
        }catch(err) {
            res.status(404).send(err);
        }
    },

    deleteById: async (req, res) => {
        try{
            const item = await news.findByIdAndDelete(req.params.id);
            res.sendStatus(200);
        }catch(err) {
            res.status(404).send(err);
        }
    }
};

module.exports = controller;
