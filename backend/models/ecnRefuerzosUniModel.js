const mongoose = require('mongoose');
const ms = require('ms');

const schema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true
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

const model = mongoose.model('ecnRefuerzosUni', schema);
module.exports = model;