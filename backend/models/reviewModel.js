const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        type: {
            type: String,
            //TODO: enum
        },
        comment: {
            type: String,
            maxlength: 500
        },
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5,
        },
    },
    {timestamps: true}
);

const model = mongoose.model('Review', schema);
module.exports = model;
