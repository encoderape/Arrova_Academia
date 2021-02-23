function phoneNumberValidator(number) {
    return /^[0-9]{9}$/.test(number);
}

module.exports = phoneNumberValidator;
