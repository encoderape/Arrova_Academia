const pdf = require('html-pdf');
const path = require('path');

const rootDir = require('./path.js');

const options = {
    format: 'A4',
    orientation: 'portrait',
    type: 'pdf'
}

function createPdf(content, fileName) {
    pdf.create(content, options).toFile(path.join(rootDir, 'assets', 'pdf' , fileName), () => {
        console.log('pdf created successfully');
    });
}

module.exports = createPdf;
