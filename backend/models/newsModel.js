const mongoose = require('mongoose');

const imageExtensionValidator = require('../validators/imageExtensionValidator.js');
const videoExtensionValidator = require('../validators/videoExtensionValidator.js');

const schema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
            validate: imageExtensionValidator,
        },
        video: {
            type: String,
            validate: videoExtensionValidator,
        },
        description: {
            type: String,
            required: true,
            maxlength: 300,
        },
        content: {
            type: String,
            required: true,
        },
    },
    {timestamps: true}
);

const model = mongoose.model('News', schema);
module.exports = model;
