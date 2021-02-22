const refuerzosEso = require('../models/ecnRefuerzosEsoModel.js');

const controller = {
    create: async (req, res) => {
        try{
            const item = await refuerzosEso.create(req.body);
            res.status(201).send(item);
        }catch(err) {
            res.status(400).send(err);
        }
    },
    read: async (req, res) => {
        try{
            const items = await refuerzosEso.find({});
            res.status(200).send(items);
        }catch(err) {
            res.status(400).send(err);
        }
    }
};

module.exports = controller;
