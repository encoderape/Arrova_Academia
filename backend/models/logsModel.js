const mongoose = require('mongoose');
const ms = require('ms');

const schema = new mongoose.Schema(
    {
        message: {
            type: String,
            required: true,
        },
        additional: {
            type: [String],
        },
        level: {
            type: Number,
            required: true,
        },
        fileName: {
            type: String,
            required: true,
        },
        lineNumber: {
            type: String,
            required: true,
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

const model = mongoose.model('Logs', schema);
module.exports = model;
