const onlyNumberValidator = require('../../validators/onlyNumberValidator.js');

describe('only number validation', () => {
   it('this is an only number', () => {
        const number = 123;
        expect(onlyNumberValidator(number)).toBeTruthy();
   });
    it('this is not an only number', () => {
        const number = 12 + 'a';
        expect(onlyNumberValidator(number)).toBeFalsy();
    });
});