const createPdf = require('./createPdf.js');

function profesionalPdf(item) {
    const content = `
        <div style="border: 1px solid black; display: flex; flex-direction: column; align-items: center; padding: 10px; margin: 0 20px;">
            <h1 style="text-align: center;">Datos de contacto</h1>
            <p style="text-align: center;">Nombre: ${item.fullName}</p>
            <p style="text-align: center;">Nombre Empresa: ${item.companyName}</p>
            <p style="text-align: center;">Correo de contacto: ${item.email}</p>
            <p style="text-align: center;">Teléfono de contacto: ${item.phone}</p>
        </div>
        <br>
        <div style="border: 1px solid black; display: flex; flex-direction: column; align-items: center; padding: 10px; margin: 0 20px;">
            <h1 style="text-align: center;">Estudia con nosotros Profesional</h1>
            <p style="text-align: center;">Localidad ${item.locate}</p>
            <p style="text-align: center;">Dirección ${item.address}</p>
            <p style="text-align: center; text-decoration: underline;">Comentario del usuario:</p>
            <p style="text-align: center;">${item.comment}</p>
        </div>
    `;

    createPdf(content, 'profesional.pdf');
}

module.exports = profesionalPdf;
