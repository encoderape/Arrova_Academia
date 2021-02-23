const mongoose = require('mongoose');
const ms = require('ms');

const emailValidator = require('../validators/emailValidator.js');
const onlyStringValidator = require('../validators/onlyStringValidator.js');
const phoneNumberValidator = require('../validators/phoneNumberValidator.js');

const schema = new mongoose.Schema(
    {
        companyName: {
            type: String,
            required: true,
        },
        locate: {
            type: String,
            required: true,
            validate: onlyStringValidator,
        },
        address: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
            validate: phoneNumberValidator,
        },
        email: {
            type: String,
            required: true,
            validate: emailValidator,
        },
        fullName: {
            type: String,
            required: true,
            validate: onlyStringValidator,
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
