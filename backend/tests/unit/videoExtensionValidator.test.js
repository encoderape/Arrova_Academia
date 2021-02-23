const videoExtensionValidator = require('../../validators/videoExtensionValidator.js');

describe('video file extension validation', () => {
    it('this is a valid video file extension, with .mp4', () => {
        const video = 'file.mp4';
        expect(true).toBe(videoExtensionValidator(video));
    });
    it('this is not a valid video file extension, with .mov', () => {
        const video = 'file.mov';
        expect(false).toBe(videoExtensionValidator(video));
    });
    it('this is not a valid video file extension, with .wmv', () => {
        const video = 'file.wmv';
        expect(false).toBe(videoExtensionValidator(video));
    });
    it('this is not a valid video file extension, with .avi', () => {
        const video = 'file.avi';
        expect(false).toBe(videoExtensionValidator(video));
    });
    it('this is not a valid video file extension, with .flv', () => {
        const video = 'file.flv';
        expect(false).toBe(videoExtensionValidator(video));
    });
})
