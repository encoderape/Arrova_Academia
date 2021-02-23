const mongoose = require('mongoose');

const onlyStringValidator = require('../validators/onlyStringValidator.js');

const schema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            validate: onlyStringValidator,
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
