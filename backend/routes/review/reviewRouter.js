const method = require('../../controllers/reviewController.js');
const isAdminAuth = require('../../middlewares/adminAuth.js');

const router = express => {
    const api = express.Router(); 
    api.post('/create', isAdminAuth, method.create);
    api.get('/read', method.read);
    return api;
};

module.exports = router;
