const logs = require('../models/logsModel.js');

const controller = {
    create: async (req, res) => {
        try{
            const item = await logs.create(req.body);
            res.status(201).send(item);
        }catch(err) {
            res.status(400).send(err);
        }
    }
};

module.exports = controller;