const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        title: {
            type: String
        },
        image: {
            type: String,
            default: '*.jpg'
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

const model = mongoose.model('Information', schema);
module.exports = model;