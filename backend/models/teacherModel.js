const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
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
