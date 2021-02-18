const rating = require('../models/ratingModel.js');

const controller = {
    create: async (req, res) => {
        try{
            const item = await rating.create(req.body);
            res.status(201).send(item);
        }catch(err) {
            res.status(500).send(err);
        }
    },

    read: async (req, res) => {
        try{
            const item = await rating.find({});
            res.status(201).send(item);
        }catch(err) {
            res.status(500).send(err);
        }
    },

    readByRate: async (req, res) => {
        try{
            const item = await rating.find({'rating':req.params.rating});
            res.status(201).send(item);
        }catch(err) {
            res.status(404).send(err);
        }
    },

    readByDate: async (req, res) => {
        try{
            const item = await rating.find({'date':req.params.date});
            res.status(201).send(item);
        }catch(err) {
            res.status(404).send(err);
        }
    }
};

module.exports = controller;