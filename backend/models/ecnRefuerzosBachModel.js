const mongoose = require('mongoose');
const ms = require('ms');

const schema = new mongoose.Schema(
    {
        letters: {
            type: [String],
            enum: ['val', 'cas', 'latin', 'griego', 'ingles', 'filo', 'geo', 'hist', 'hist arte', 'hist esp']
        },
        sciences: {
            type: [String],
            enum: ['mates', 'mates aplicadas', 'fisica', 'quimica', 'bio', 'geo']
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
