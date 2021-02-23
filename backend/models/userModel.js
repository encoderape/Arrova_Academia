const mongoose = require('mongoose');

const onlyStringValidator = require('../validators/onlyStringValidator.js');
const emailValidator = require('../validators/emailValidator.js');

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            validate: onlyStringValidator,
        },
        surname1: {
            type: String,
            required: true,
            validate: onlyStringValidator,
        },
        surname2: {
            type: String,
            required: true,
            validate: onlyStringValidator,
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: emailValidator,
        },
        password: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
        birthdate: {
            type: Date,
            required: true,
        },
        role: {
            type: String,
            required: true,
            enum: ['admin', 'user'],
            default: 'user',
        },
        terms: {
            type: Boolean,
            required: true,
            default: false,
        },
        emailConfirmation: {
            type: Boolean,
            required: true,
            default: false,
        },
        tokens: [{
            type: String,
        }],
        resetToken: {
            type: String,
        },
        resetTokenExpiration: {
            type: Date,
        },
    },
    {timestamps: true}
);

const model = mongoose.model('User', schema);
module.exports = model;
