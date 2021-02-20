const titulaciones = require('../models/ecnTitulacionesModel.js');

const controller = {
    create: async (req, res) => {
        try{
            const item = await titulaciones.create(req.body);
            res.status(201).send(item);
        }catch(err) {
            res.status(400).send(err);
        }
    },
    read: async (req, res) => {
        try{
            const items = await titulaciones.find({});
            res.status(200).send(items);
        }catch(err) {   
            res.status(400).send(err);
        }
    }
};

module.exports = controller;
