const method = require('../../controllers/infoCursosController.js');

const router = express => {
    const api = express.Router();
    api.post('/create', method.create);
    api.get('/read', method.read);
    api.get('/read/:id', method.readById);
    api.put('/update/:id', method.update);
    api.delete('/delete/:id', method.delete);
    return api;
};

module.exports = router;
