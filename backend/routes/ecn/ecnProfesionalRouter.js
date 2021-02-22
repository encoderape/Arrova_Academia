const method = require('../../controllers/ecnProfesionalController.js');
const isAdminAuth = require('../../middlewares/admin-auth.js');

const router = express => {
    const api = express.Router();
    api.post('/create', method.create);
    api.get('/read', isAdminAuth, method.read);
    return api;
}

module.exports = router;
