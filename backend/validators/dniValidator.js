function dniValidator(dni) {
    if (/^[0-9]{8}[A-Z]$/.test(dni)) {
        const dni_letters = "TRWAGMYFPDXBNJZSQVHLCKE";
        const letter = dni_letters.charAt(parseInt(dni, 10) % 23);
        return letter === dni.charAt(8);
    }
    return false;
}

module.exports = dniValidator;
