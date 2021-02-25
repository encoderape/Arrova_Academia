const method = require('../../controllers/ecnTitulacionesController.js');
const isAdminAuth = require('../../middlewares/adminAuth.js');

const router = express => {
    const api = express.Router();
    api.post('/create', method.create);
    api.get('/read', isAdminAuth, method.read);
    return api;
};

module.exports = router;
