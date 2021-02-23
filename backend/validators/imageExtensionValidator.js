function imageExtensionValidator(image) {
    return /\.(jpe?g|png)$/.test(image);
}

module.exports = imageExtensionValidator;
