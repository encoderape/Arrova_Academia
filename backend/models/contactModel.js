const mongoose = require('mongoose');
const ms = require('ms');

const onlyStrings = require('../validators/only-string.js');

const schema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            validate: onlyStrings,
        },
        email: {
            type: String,
            required: true,
        },
        subject: {
            type: String,
            required: true,
            enum: ['asistencia técnica', 'curso', 'trabajo']
        },
        message: {
            type: String,
            required: true,
            maxlength: 500,
        },
        terms: {
            type: Boolean,
            required: true,
            default: false,
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

const model = mongoose.model('Contact', schema);
module.exports = model;
