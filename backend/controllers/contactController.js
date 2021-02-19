const contact = require('../models/contactModel.js');

const controller = {
    create: async (req, res) => {
        try {
            const item = await contact.create(req.body);
            res.status(201).send(item);
        } catch (err) {
            res.status(500).send(err);
        }
    }
}

module.exports = controller;
