const emailValidator = require('../../validators/emailValidator.js');

describe('email validation', () => {
    test('this is an email with .com', () => {
        const email = 'test@test.com';
        expect(true).toBe(emailValidator(email));
    });
    test('this is an email with .es', () => {
        const email = 'test@test.es';
        expect(true).toBe(emailValidator(email));
    });
    test('this is not an email, because there is one symbol in domain hosting name', () => {
        const email = 'test@te_st.com';
        expect(false).toBe(emailValidator(email));
    });
    test('this is not an email, because there is one symbol in domain identifier', () => {
        const email = 'test@test.c';
        expect(false).toBe(emailValidator(email));
    });
})
