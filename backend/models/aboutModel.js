const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
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
