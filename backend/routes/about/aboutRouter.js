const method = require('../../controllers/aboutController.js');
const isAdminAuth = require('../../middlewares/admin-auth.js');

const router = express => {
    const api = express.Router();
    api.post('/create', isAdminAuth, method.create);
    api.get('/read', method.read);
    api.put('/update/:id', isAdminAuth, method.update);
    api.delete('/delete/:id', isAdminAuth, method.delete);
    return api;
};

module.exports = router;
