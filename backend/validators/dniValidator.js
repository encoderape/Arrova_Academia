function dniValidator(dni) {
    return /^[0-9]{8}[A-Z]$/.test(dni);
}

module.exports = dniValidator;
