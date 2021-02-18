const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        title: {
            type: String
        },
        image: {
            type: String,
            //TODO: SOLO permitir jpeg, jpg y png
        },
        description: {
            type: String,
            maxlength: 300
        },
        content: {
            type: String
        },
    },
    {timestamps: true}
);

const model = mongoose.model('News', schema);
module.exports = model;
