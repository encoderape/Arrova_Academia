function emailValidator(string) {
    return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(string);
}

module.exports = emailValidator;
