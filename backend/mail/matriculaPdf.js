const createPdf = require('./createPdf.js');

function matriculaPdf(item, user) {
    const content = `
        <div style="border: 1px solid black; display: flex; flex-direction: column; align-items: center; padding: 10px; margin: 0 20px;">
            <h1 style="text-align: center;">Datos de contacto</h1>
            <p style="text-align: center;">Nombre: ${user.name}</p>
            <p style="text-align: center;">Apellidos: ${user.surname1} ${user.surname2}</p>
            <p style="text-align: center;">Correo de contacto: ${user.email}</p>
            <p style="text-align: center;">Teléfono de contacto: ${user.phone}</p>
        </div>
        <br>
        <div style="border: 1px solid #000000; display: flex; flex-direction: column; align-items: center; padding: 10px; margin: 0 20px;">
            <h1 style="text-align: center;">Matricula ${item.courseName}</h1>
            <p style="text-align: center;">Pago: ${item.payment}</p>
            <p style="text-align: center;">Cantidad a pagar: ${item.quantity}</p>
            <p style="text-align: center;">Direccion: ${item.address}</p>
            <p style="text-align: center;">Poblacion: ${item.city}</p>
            <p style="text-align: center;">Provincia: ${item.province}</p>
            <p style="text-align: center;">Codigo postal: ${item.postcode}</p>
            <p style="text-align: center;">Tipo de pago: ${item.paymentMethod}</p>
            <p style="text-align: center;">Numero de cuenta: ${item.accountNumber}</p>
        </div>
    `;

    createPdf(content, 'matricula.pdf');
}

module.exports = matriculaPdf;