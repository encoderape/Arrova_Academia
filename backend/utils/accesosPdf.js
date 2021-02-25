const createPdf = require('./createPdf.js');

function accesosPdf(item) {
    const content = `
        <h1>Estudia con nosotros Accesos</h1>
        <p>Examen de acceso a ${item.accessTest}</p>
        <p>${item.nativeLanguage} como lengua materna</p>
        <p>${item.englishLevel} como nivel de inglés</p>
        <p>Tiene los siguientes estudios: ${item.studies}</p>
        <p>Comentario del usuario: ${item.comment}</p>
        <p>Correo de contacto: ${item.email}</p>
        <p>Teléfono de contacto: ${item.phone}</p>
    `;

    createPdf(content, 'accesos.pdf');
}

module.exports = accesosPdf;
