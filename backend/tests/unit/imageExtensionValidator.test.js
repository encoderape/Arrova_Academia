const imageExtensionValidator = require('../../validators/imageExtensionValidator.js');

describe('image file extension validation', () => {
    it('this is a valid image file extension, with .jpg', () => {
        const image = 'file.jpg';
        expect(true).toBe(imageExtensionValidator(image));
    });
    it('this is a valid image file extension, with .jpeg', () => {
        const image = 'file.jpeg';
        expect(true).toBe(imageExtensionValidator(image));
    });
    it('this is a valid image file extension, with .png', () => {
        const image = 'file.png';
        expect(true).toBe(imageExtensionValidator(image));
    });
    it('this is not a valid image file extension, with .gif', () => {
        const image = 'file.gif';
        expect(false).toBe(imageExtensionValidator(image));
    });
    it('this is not a valid image file extension, with .tif', () => {
        const image = 'file.tif';
        expect(false).toBe(imageExtensionValidator(image));
    });
    it('this is not a valid image file extension, with .tiff', () => {
        const image = 'file.tiff';
        expect(false).toBe(imageExtensionValidator(image));
    });
    it('this is not a valid image file extension, with .bmp', () => {
        const image = 'file.bmp';
        expect(false).toBe(imageExtensionValidator(image));
    });
    it('this is not a valid image file extension, with .eps', () => {
        const image = 'file.eps';
        expect(false).toBe(imageExtensionValidator(image));
    });
})
