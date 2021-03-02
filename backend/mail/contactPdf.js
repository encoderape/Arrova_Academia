const createPdf = require('./createPdf.js');

function contactPdf(item) {
    const content = `
        <div style="border: 1px solid black; display: flex; flex-direction: column; align-items: center; padding: 10px; margin: 0 20px;">
            <h1 style="text-align: center;">Datos de contacto</h1>
            <p style="text-align: center;">Nombre: ${item.fullName}</p>
            <p style="text-align: center;">Correo de contacto: ${item.email}</p>
            <p style="text-align: center;">Teléfono de contacto: ${item.phone}</p>
        </div>
        <br>
        <div style="border: 1px solid #000000; display: flex; flex-direction: column; align-items: center; padding: 10px; margin: 0 20px;">
            <p style="text-align: center;">Tema: ${item.subject}</p>
            <p style="text-align: center; text-decoration: underline;">Mensaje del usuario:</p>
            <p style="text-align: center;">${item.message}</p>
        </div>
    `;

    createPdf(content, 'contact.pdf');
}

module.exports = contactPdf;