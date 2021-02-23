const phoneNumberValidator = require('../../validators/phoneNumberValidator.js');

describe('phone number validation', () => {
    it('this is a valid phone number', () => {
        const phoneNumber = 666666666;
        expect(true).toBe(phoneNumberValidator(phoneNumber));
    });
    it('this is not a valid phone number, because it has 8 numbers', () => {
        const phoneNumber = 66666666;
        expect(false).toBe(phoneNumberValidator(phoneNumber));
    });
    it('this is not a valid phone number, because it has 10 numbers', () => {
        const phoneNumber = 6666666666;
        expect(false).toBe(phoneNumberValidator(phoneNumber));
    });
    it('this is not a valid phone number, because it is an string', () => {
        const phoneNumber = 'phone number';
        expect(false).toBe(phoneNumberValidator(phoneNumber));
    });
})
