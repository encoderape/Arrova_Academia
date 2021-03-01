function onlyNumberValidator(number) {
    return /^[0-9]+$/.test(number);
}

module.exports = onlyNumberValidator;
