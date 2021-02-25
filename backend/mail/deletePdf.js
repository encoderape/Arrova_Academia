const fs = require('fs');
const path = require('backend/utils/path');

const rootDir = require('../utils/path.js');

function deletePdf(fileName) {
    fs.unlink(path.join(rootDir, 'assets', 'pdf', fileName), () => {
        console.log('pdf deleted successfully');
    });
}

module.exports = deletePdf;
