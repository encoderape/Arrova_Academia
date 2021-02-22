const mongoose = require('mongoose');
const ms = require('ms');

const onlyStrings = require('../validators/onlyStringValidator.js');

const schema = new mongoose.Schema(
    {
        companyName: {
            type: String,
            required: true,
        },
        locate: {
            type: String,
            required: true,
            validate: onlyStrings,
        },
        address: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
            maxlength: 9,
        },
        email: {
            type: String,
            required: true,
        },
        fullName: {
            type: String,
            required: true,
            validate: onlyStrings,
        },
        comment: {
            type: String,
            required: true,
        },
        terms: {
            type: Boolean,
            required: true,
            default: false,
        },
        expireAt: {
            type: Date,
            default: Date.now,
            index: {
                expires: ms('30 days'),
            },
        },
    },
    {timestamps: true}
);

const model = mongoose.model('EcnProfessional', schema);
module.exports = model;
