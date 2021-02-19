const method = require('../../controllers/ecnProfessionalController.js');

const router = express => {
    const api = express.Router();
    api.post('/create', method.create);
    api.get('/read', method.read);
    api.delete('/delete/:id', method.deleteById);
    return api;
}

module.exports = router;
