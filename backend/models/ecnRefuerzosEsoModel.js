const mongoose = require('mongoose');
const ms = require('ms');

const schema = new mongoose.Schema(
    {
        letters: [{
            type: String,
            enum: ['valenciano', 'castellano', 'latín', 'inglés', 'geografía', 'historia']
        }],
        sciences: [{
            type: String,
            enum: ['matemáticas', 'física y química', 'biología y geología']
        }],
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

const model = mongoose.model('EcnRefuerzosEso', schema);
module.exports = model;
