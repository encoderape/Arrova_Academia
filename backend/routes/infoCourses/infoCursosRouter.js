const method = require('../../controllers/infoCursosController.js');
const isAdminAuth = require('../../middlewares/adminAuth.js');

const router = express => {
    const api = express.Router();
    api.post('/create', isAdminAuth, method.create);
    api.get('/read', method.read);
    api.get('/read/:id', method.readById);
    api.put('/update/:id', isAdminAuth, method.update);
    api.delete('/delete/:id', isAdminAuth, method.delete);
    return api;
};

module.exports = router;