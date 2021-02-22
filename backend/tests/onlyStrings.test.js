const onlyStrings = require('../validators/onlyStringValidator.js')

describe('only strings validation', () => {
    test('this is an only string', () => {
        const string = 'hi world';
        expect(true).toBe(onlyStrings(string));
    });
    test('this is not an only string', () => {
        const string = 'hi w0rld';
        expect(false).toBe(onlyStrings(string));
    });
})
