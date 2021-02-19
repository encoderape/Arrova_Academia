const method = require('../../controllers/reviewController.js');
const isUserAuth = require('../../middlewares/user-auth.js');

const router = express => {
    const api = express.Router(); 
    api.post('/create', isUserAuth, method.create);
    api.get('/read', method.read);
    return api;
};

module.exports = router;
