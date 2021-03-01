const mongoose = require('mongoose');

const onlyStringValidator = require('../validators/onlyStringValidator.js');

const schema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true
        },
        description: {
            type: String,
            required: true
        },
        teacher: {
            type: String,
            require: true,
            validation: onlyStringValidator
        },
        language: {
            type: String,
            require: true,
            validation: onlyStringValidator
        },
        priceMonth: {
            type: String
        },
        priceCourse: {
            type: String
        },
        courseIncludes: [{
            type: String,
            required: true,
        }],
        courseObjectives: [{
            type: String,
            required: true
        }],
        courseContents: [{
            type: String,
            required: true
        }]
    },
    {timestamps: true}
);

const model = mongoose.model('InfoCursos', schema);
module.exports = model;
