function onlyStrings(string) {
    return /^[A-Za-zÀ-ÿ\s]+$/.test(string);
}

module.exports = onlyStrings;
