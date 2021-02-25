const createPdf = require('./createPdf.js');

function accesosPdf(item) {
    const content = `
        <div style="border: 1px solid black; display: flex; flex-direction: column; align-items: center; padding: 10px; margin: 0 20px;">
            <h1 style="text-align: center;">Datos de contacto</h1>
            <p style="text-align: center;">Nombre: ${item.fullName}</p>
            <p style="text-align: center;">Correo de contacto: ${item.email}</p>
            <p style="text-align: center;">Teléfono de contacto: ${item.phone}</p>
        </div>
        <br>
        <div style="border: 1px solid black; display: flex; flex-direction: column; align-items: center; padding: 10px; margin: 0 20px;">
            <h1 style="text-align: center;">Estudia con nosotros Accesos</h1>
            <p style="text-align: center;">Examen de acceso a ${item.accessTest}</p>
            <p style="text-align: center;">${item.nativeLanguage} como lengua materna</p>
            <p style="text-align: center;">${item.englishLevel} como nivel de inglés</p>
            <p style="text-align: center; text-decoration: underline;">Tiene los siguientes estudios:</p>
            <p style="text-align: center;">${item.studies}</p>
            <p style="text-align: center; text-decoration: underline;">Comentario del usuario:</p>
            <p style="text-align: center;">${item.comment}</p>
        </div>
    `;

    createPdf(content, 'accesos.pdf');
}

module.exports = accesosPdf;
