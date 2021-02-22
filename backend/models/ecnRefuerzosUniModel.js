const mongoose = require('mongoose');

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
        }
    }
);

const model = mongoose.model('/ecnRefuezosUni', schema);
module.exports = model;
