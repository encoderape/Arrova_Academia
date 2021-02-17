const teacher = require('../models/teacherModel.js');

const controller = {
    create: async (req, res) => {
        try {
            const item = await teacher.create(req.body);
            res.status(201).send(item);
        } catch (err) {
            res.status(400).send(err);
        }
    },
    read: async (req, res) => {
        try {
            const items = await teacher.find({});
            res.status(200).send(items);
        } catch (err) {
            res.status(400).send(err);
        }
    },
    update: async (req, res) => {
        try {
            await teacher.findByIdAndUpdate(req.params.id, req.body);
            res.sendStatus(200);
        } catch (err) {
            res.status(404).send(err);
        }
    },
    delete: async (req, res) => {
        try {
            await teacher.findByIdAndDelete(req.params.id);
            res.sendStatus(200);
        } catch (err) {
            res.status(404).send(err);
        }
    }
}

module.exports = controller;
