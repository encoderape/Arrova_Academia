const review = require('../models/reviewModel.js');

const controller = {
    create: async (req, res) => {
        try{
            const item = await review.create(req.body);
            res.status(201).send(item);
        }catch(err) {
            res.status(500).send(err);
        }
    },

    read: async (req, res) => {
        try{
            const item = await review.find({});
            res.status(201).send(item);
        }catch(err) {
            res.status(500).send(err);
        }
    }
};

module.exports = controller;
