const createPdf = require('./createPdf.js');

function refuerzosBachPdf(item) {
    const content = `
        <div style="border: 1px solid black; display: flex; flex-direction: column; align-items: center; padding: 10px; margin: 0 20px;">
            <h1 style="text-align: center;">Datos de contacto</h1>
            <p style="text-align: center;">Nombre: ${item.fullName}</p>
            <p style="text-align: center;">Correo de contacto: ${item.email}</p>
            <p style="text-align: center;">Teléfono de contacto: ${item.phone}</p>
        </div>
        <br>
        <div style="border: 1px solid black; display: flex; flex-direction: column; align-items: center; padding: 10px; margin: 0 20px;">
            <h1 style="text-align: center;">Estudia con nosotros Refuerzos Bachillerato</h1>
            <p style="text-align: center;">Letras:</p>
            <p style="text-align: center;">${item.letters}</p>
            <p style="text-align: center;">Ciencias:</p>
            <p style="text-align: center;">${item.sciences}</p>
            <p style="text-align: center; text-decoration: underline;">Comentario del usuario:</p>
            <p style="text-align: center;">${item.comment}</p>
        </div>
    `;

    createPdf(content, 'refuerzosbach.pdf');
}

module.exports = refuerzosBachPdf;
