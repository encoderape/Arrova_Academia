const mongoose = require('mongoose');

const onlyStrings = require('../validators/onlyStringValidator.js');

const schema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            validate: onlyStrings,
        },
        biography: [{
            type: String,
            required: true,
        }]
    },
    {timestamps: true}
);

const model = mongoose.model('Teacher', schema);
module.exports = model;
