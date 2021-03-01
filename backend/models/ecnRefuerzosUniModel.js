const mongoose = require('mongoose');
const ms = require('ms');

const emailValidator = require('../validators/emailValidator.js');
const onlyStringValidator = require('../validators/onlyStringValidator.js');
const phoneNumberValidator = require('../validators/phoneNumberValidator.js');

const schema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            validate: emailValidator,
        },
        phone: {
            type: Number,
            required: true,
            validate: phoneNumberValidator,
        },
        fullName: {
            type: String,
            required: true,
            validate: onlyStringValidator,
        },
        terms: {
            type: Boolean,
            required: true,
            default: false
        },
        comment: {
            type: String,
            required: true
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

const model = mongoose.model('ecnRefuerzosUni', schema);
module.exports = model;
