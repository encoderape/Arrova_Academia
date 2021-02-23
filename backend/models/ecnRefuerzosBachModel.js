const mongoose = require('mongoose');
const ms = require('ms');

const emailValidator = require('../validators/emailValidator.js');

const schema = new mongoose.Schema(
    {
        letters: [{
            type: String,
            enum: ['valenciano', 'castellano', 'latín', 'griego', 'inglés', 'filosofía', 'geografía', 'historia', 'historia del arte', 'historia de españa']
        }],
        sciences: [{
            type: String,
            enum: ['matemáticas', 'matemáticas aplicadas', 'física', 'química', 'biología', 'geología']
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
    {timestamps: true}
);

const model = mongoose.model('EcnRefuerzosBach', schema);
module.exports = model;
