const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
            //TODO: SOLO permitir jpeg, jpg y png
        },
        description: {
            type: String,
            required: true,
            maxlength: 300
        },
        content: {
            type: String,
            required: true
        },
    },
    {timestamps: true}
);

const model = mongoose.model('News', schema);
module.exports = model;
