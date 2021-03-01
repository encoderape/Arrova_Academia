const dniValidator = require('../../validators/dniValidator.js');

describe('dni validation', () => {
    it('this is a valid dni', () => {
        const dni = '23836682B';
        expect(true).toBe(dniValidator(dni));
    });
    it('this is not a valid dni', () => {
        const dni = '23836782B';
        expect(false).toBe(dniValidator(dni));
    });
    it('this is not a valid dni, because two characters', () => {
        const dni = '12345678AB';
        expect(false).toBe(dniValidator(dni));
    });
    it('this is not a valid dni, because nine numbers', () => {
        const dni = '123456789A';
        expect(false).toBe(dniValidator(dni));
    });
    it('this is not a valid dni, because seven numbers', () => {
        const dni = '1234567A';
        expect(false).toBe(dniValidator(dni));
    });
    it('this is not a valid dni, because no character', () => {
        const dni = '12345678';
        expect(false).toBe(dniValidator(dni));
    });
    it('this is not a valid dni, because no numbers', () => {
        const dni = 'ABCDEFGHI';
        expect(false).toBe(dniValidator(dni));
    });
})
