const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        course: {
          type: String,
          require: true
        },
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
            require: true
        },
        lenguage: {
            type: String,
            require: true
        },
        priceMonth: {
            type: Number,
            required: true
        },
        priceCourse: {
            type: Number,
            required: true
        },
        courseIncludes: [{
            type: String,
            required: true
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
