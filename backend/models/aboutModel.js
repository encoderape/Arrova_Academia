const mongoose = require('mongoose');

const onlyStrings = require('../validators/only-string.js');

const schema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            validate: onlyStrings,
        },
        content: [{
            type: String,
            required: true,
        }],
    },
    {timestamps: true}
);

const model = mongoose.model('About', schema);
module.exports = model;
