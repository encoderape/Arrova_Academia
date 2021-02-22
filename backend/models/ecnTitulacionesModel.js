const mongoose = require('mongoose');
const ms = require('ms');

const schema = new mongoose.Schema(
    {
        degree: {
            type: String,
            enum: ['eso', 'bachillerato'],
            required: true
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
        studies: {
            type: String,
            enum: ['eso', 'egb', 'bup', 'bachillerato', 'cou', 'sin'],
            required: true
        },
        email: {
            type: String,
            required: true,
        },
        terms: {
            type: Boolean,
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

const model = mongoose.model('EcnTitulaciones', schema);
module.exports = model;
