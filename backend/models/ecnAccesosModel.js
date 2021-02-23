const mongoose = require('mongoose');
const ms = require('ms');

const emailValidator = require('../validators/emailValidator.js');

const schema = new mongoose.Schema(
    {
        accessTest: {
            type: String,
            enum: ['ciclo formativo de grado medio', 'ciclo formativo de grado superior', 'universidad', 'universidad +25', 'universidad +40'],
            require: true
        },
        nativeLanguage: {
            type: String,
            enum: ['valenciano', 'castellano'],
            required: true
        },
        englishLevel: {
            type: String,
            enum: ['a2', 'b1', 'b2', 'c1', 'c2', 'sin'],
            required: true
        },
        studies: [{
            type: String,
            enum: ['eso', 'egb', 'bup', 'bachillerato', 'cou', 'estudios superiores', 'ciclo formativo de grado medio', 'ciclo formativo de grado superior', 'sin'],
            required: true
        }],
        email: {
            type: String,
            required: true,
            validate: emailValidator,
        },
        terms: {
            type: Boolean,
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
    {timestamps:true}
);

const model = mongoose.model('EcnAccesos', schema);
module.exports = model;
