const pdf = require('html-pdf');
const path = require('backend/utils/path');

const rootDir = require('../utils/path.js');

const options = {
    header: {
      height: '45mm',
      contents: '<hr><div style="text-align: center;">Arrova Académia</div>'
    },
    footer: {
      height: '28mm',
      contents: '<hr>'
    },
    format: 'A4',
    orientation: 'portrait',
    type: 'pdf'
}

function createPdf(content, fileName) {
    pdf.create(content, options).toFile(path.join(rootDir, 'assets', 'pdf' , fileName), () => {
        console.log('pdf created successfully');
    });

    return true;
}

module.exports = createPdf;
