const mongoose = require('mongoose');

const onlyStringValidator = require('../validators/onlyStringValidator.js');
const onlyNumberValidator = require('../validators/onlyNumberValidator.js');

const schema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true
        },
        description: {
            type: String,
            required: true,
            validation: onlyStringValidator
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
            type: Number,
            validation: onlyNumberValidator
        },
        priceCourse: {
            type: Number,
            validation: onlyNumberValidator
        },
        courseIncludes: [{
            type: String,
            required: true,
        }],
        courseObjectives: [{
            type: String,
            required: true,
            validation: onlyStringValidator
        }],
        courseContents: [{
            type: String,
            required: true,
            validation: onlyStringValidator
        }]
    },
    {timestamps: true}
);

const model = mongoose.model('InfoCursos', schema);
module.exports = model;
