const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const user = require('../models/userModel.js');

const controller = {
    create: async (req, res) => {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10);
            const item = await user.create(req.body);
            res.status(201).send(item);
        } catch (err) {
            res.status(400).send(err);
        }
        // TODO: SEND VALIDATION EMAIL
    },
    login: async (req, res) => {
        try {
            const item = await user.findOne({email: req.body.email});
            if (!item) {
                return res.sendStatus(404);
            }
            const passMatch = await bcrypt.compare(req.body.password, item.password);
            if (!passMatch) {
                return res.sendStatus(400);
            }
            const token = jwt.sign({_id: item._id}, "secret");
            const login = await user.findByIdAndUpdate({_id: item._id}, { $push: {tokens: token}});
            res.status(200).send(login);
        } catch (err) {
            res.status(500).send(err);
        }
    },
    read: async (req, res) => {
        try {
            const items = await user.find({});
            res.status(200).send(items);
        } catch (err) {
            res.status(400).send(err);
        }
    },
    readById: async (req, res) => {
        try {
            const item = await user.findById(req.params.id);
            res.status(200).send(item);
        } catch (err) {
            res.status(404).send(err);
        }
    },
    // TODO: LOGOUT METHOD, THIS REMOVE THE TOKEN
    update: async (req, res) => {
        try {
            await user.findByIdAndUpdate(req.params.id, req.body);
            res.sendStatus(200);
        } catch (err) {
            res.status(404).send(err);
        }
    },
    // TODO: UPLOAD PHOTO
    // TODO: CONFIRMATION UPDATE
    delete: async (req, res) => {
        try {
            await user.findByIdAndDelete(req.params.id);
            res.sendStatus(200);
        } catch (err) {
            res.status(404).send(err);
        }
    }
}

module.exports = controller;
