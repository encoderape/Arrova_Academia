const mongoose = require('mongoose');

const onlyStringValidator = require('../validators/onlyStringValidator.js');
const phoneNumberValidator = require('../validators/phoneNumberValidator.js');

const schema = new mongoose.Schema(
    {
        userId: {
          type: String,
          required: true
        },
        name: {
            type: String,
            required: true,
            validation: onlyStringValidator
        },
        payment: {
            type: String,
            enum: ['mensual', 'total', 'dos pagos'],
            require: true
        },
        quantity: {
            type: Number,
            enum: [35, 270, 200, 115, 55, 300],
            required: true
        },
        active: {
            type: Boolean,
            required: true,
            default: false
        },
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
            validation: onlyStringValidator
        },
        province: {
            type: String,
            required: true,
            validation: onlyStringValidator
        },
        postcode: {
            type: Number,
            maxlength: 5,
            required: true
        },
        phone: {
            type: Number,
            required: true,
            validator: phoneNumberValidator
        },
        paymentMethod: {
            type: String,
            enum: ['domiciliacion', 'transferencia', 'tarjeta'],
            required: true
        },
        accountNumber: {
            type: String
        },
        terms: {
            type: Boolean,
            require: true,
            default: false
        }
    },
    {timestamps: true}
);

const model = mongoose.model('Matricula', schema);
module.exports = model;
