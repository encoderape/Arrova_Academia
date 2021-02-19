const professional = require('../models/ecnProfessionalModel.js');

const controller = {
    create: async (req, res) => {
        try{
            const item = await professional.create(req.body);
            res.status(201).send(item);
        }catch(err) {
            res.status(400).send(err);
        }
    },
    
    read: async (req, res) => {
        try{
            const item = await professional.find({});
            res.status(200).send(item);
        }catch(err) {
            res.status(400).send(err);
        }
    },

    deleteById: async (req, res) => {
        try{
            const item = await professional.findByIdAndDelete(req.params.id);
            res.sendStatus(200);
        }catch(err) {
            res.status(404).send(err);
        }   
    }
};

module.exports = controller;
