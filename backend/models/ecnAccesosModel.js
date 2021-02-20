const mongoose = require('mongoose');
const ms = require('ms');

const schema = new mongoose.Schema(
    {
        accessTest: {
            type: String,
            enum: ['cgm', 'cgs', 'uni', 'uni+25', 'uni+40'],
            require: true
        },
        nativeLenguage: {
            type: String,
            enum: ['valenciano', 'castellano'],
            required: true
        },
        englishLevel: {
            type: String,
            enum: ['a2', 'b1', 'b2', 'c1', 'c2', 'sin'],
            required: true
        },
        studies: {
            type: String,
            enum: ['eso', 'egb', 'bup', 'bach', 'cou', 'superiores', 'cgm', 'cgs', 'sin'],
            required: true
        },
        email: {
            type: String,
            required: true,
            //TODO: REGEX
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
