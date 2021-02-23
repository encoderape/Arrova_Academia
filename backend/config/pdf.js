const pdf = require('jspdf');

function createPdf() {
    const doc = new pdf();

    doc.text('hola mundo!!', 10, 10);
    doc.save('a4.pdf');
};

module.exports = createPdf;
