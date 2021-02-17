const about = require('../models/aboutModel.js');

const controller = {
    create: async (req, res) => {
        try {
            const item = await about.create(req.body);
            res.status(201).send(item);
        } catch (err) {
            res.status(400).send(err);
        }
    },
    read: async (req, res) => {
        try {
            const items = await about.find({});
            res.status(200).send(items);
        } catch (err) {
            res.status(400).send(err);
        }
    },
    update: async (req, res) => {
        try {
            await about.findByIdAndUpdate(req.params.id, req.body);
            res.sendStatus(200);
        } catch (err) {
            res.status(404).send(err);
        }
    },
    delete: async (req, res) => {
        try {
            await about.findByIdAndDelete(req.params.id);
            res.sendStatus(200);
        } catch (err) {
            res.status(404).send(err);
        }
    }
}

module.exports = controller;
