const createPdf = require('./createPdf.js');

function matriculaUserPdf() {
    const content = `
        <div style="border: 1px solid black; display: flex; flex-direction: column; align-items: center; padding: 10px; margin: 0 20px;">
            <h1 style="text-align: center;">¡Bienvenido al curso!</h1>
            <p style="text-align: center;">En este curso tendras un acceso las 24h al dia los 365 dias del año sin ningun tipo de inconveniente. 
            Agradecemos la confianza puesta en nuestro equipo y esperamos que tu experiencia se lo mas agradable posible.</p>
        </div>
    `;

    createPdf(content, 'matriculaUser.pdf');
}

module.exports = matriculaUserPdf;