const mongoose = require('mongoose');
const ms = require('ms');

const schema = new mongoose.Schema(
    {
        title: {
            type: String,
            enum: ['a2', 'b1', 'b2', 'c1', 'c2'],
            required: true
        },
        nativeLenguage: {
            type: String,
            enum: ['valenciano', 'castellano'],
            required: true
        },
        previousTitle: {
            type: Boolean,
            required: true
        },
        studies: {
            type: String,
            enum: ['eso', 'bach', 'cgm', 'cgs', 'superiores'],
            required: true
        },
        email: {
            type: String,
            required: true
            //TODO: REGEX
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

const model = mongoose.model('EcnValencian', schema);
module.exports = model;
