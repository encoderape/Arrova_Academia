const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        type: {
            type: String,
            //TODO: enum
        },
        commentary: {
            type: String,
            maxlength: 500
        },
        rating: {
            type: Number
        },
    },
    {timestamps: true}
);

const model = mongoose.model('/Rating', schema);
module.exports = model;