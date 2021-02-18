const method = require('../../controllers/reviewController.js');

const router = express => {
    const api = express.Router(); 
    api.post('/create', method.create);
    api.get('/read', method.read);
    return api;
};

module.exports = router;