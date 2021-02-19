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
    //TODO: autodelete
};

module.exports = controller;
