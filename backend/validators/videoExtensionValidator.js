function videoExtensionValidator(video) {
    return /\.(mp4)$/.test(video);
}

module.exports = videoExtensionValidator;
