const onlyStringValidator = require('../../validators/onlyStringValidator.js')

describe('only strings validation', () => {
    it('this is an only string', () => {
        const string = 'hi world';
        expect(true).toBe(onlyStringValidator(string));
    });
    it('this is not an only string', () => {
        const string = 'hi w0rld';
        expect(false).toBe(onlyStringValidator(string));
    });
})
