const mongoose  = require('mongoose');

const schema = mongoose.Schema(
    {
        message: {
            type: String,
            required: true
        },
        additional: {
            type: [String]
        },
        level: {
            type: Number,
            required: true
        },
        fileName: {
            type: String,
            required: true
        },
        lineNumber: {
            type: String,
            required: true
        }
    },
    {timestamps: true},
);

const model = mongoose.model('Logs', schema);
module.exports = model;
