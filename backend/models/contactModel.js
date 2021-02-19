const mongoose = require('mongoose');
const ms = require('ms');

const schema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        subject: {
            type: String,
            required: true,
            // TODO: Enum
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
                expires: ms('30 days')
            }
        }
    },
    {timestamps: true}
);

const model = mongoose.model('Contact', schema);
module.exports = model;
