const mongoose = require('mongoose');
const ms = require('ms');

const emailValidator = require('../validators/emailValidator.js');
const onlyStringValidator = require('../validators/onlyStringValidator.js');
const phoneNumberValidator = require('../validators/phoneNumberValidator.js');

const schema = new mongoose.Schema(
    {
        degree: {
            type: String,
            enum: ['a2', 'b1', 'b2', 'c1', 'c2'],
            required: true
        },
        nativeLanguage: {
            type: String,
            enum: ['valenciano', 'castellano'],
            required: true
        },
        previousDegree: {
            type: Boolean,
            required: true
        },
        studies: {
            type: String,
            enum: ['eso', 'bachillerato', 'ciclo formativo de grado medio', 'ciclo formativo de grado superior', 'estudios superiores', 'sin'],
            required: true
        },
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
            maxlength: 500,
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

const model = mongoose.model('EcnValenciano', schema);
module.exports = model;
