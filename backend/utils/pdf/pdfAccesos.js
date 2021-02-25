const pdf = require('html-pdf');

function createPdf(item) {
    const content = `
    <h1>Accesos</h1>
    <p>Examen de acceso: ${item.accessTest}</p>
    <p>Lengua materna: ${item.nativeLanguage}</p>
`;

    pdf.create(content).toFile('accesos.pdf', (err, res) => {
        if(err) {
            console.log(err);
        } else {
            console.log(res);
        }
    });
};

module.exports = createPdf;