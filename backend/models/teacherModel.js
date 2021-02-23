const mongoose = require('mongoose');

const imageExtensionValidator = require('../validators/imageExtensionValidator.js');
const onlyStringValidator = require('../validators/onlyStringValidator.js');

const schema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            validate: onlyStringValidator,
        },
        image: {
            type: String,
            required: true,
            validate: imageExtensionValidator,
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
