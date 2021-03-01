const method = require('../../controllers/matriculaController.js');
const isAdminsAuth = require('../../middlewares/adminAuth.js');

const router = express => {
    const api = express.Router();
    api.post('/create', isAdminsAuth, method.create);
    api.get('/read', method.read);
    api.get('/read/:id', method.readById);
    api.put('/update/:id', isAdminsAuth, method.update);
    api.delete('/delete/:id', isAdminsAuth, method.delete);
    return api;
};

module.exports = router;
