const method = require('../../controllers/ratingController.js');

const router = express => {
    const api = express.Router(); 
    api.post('/create', method.create);
    api.get('/read', method.read);
    api.get('/read/:rating', method.readByRate);
    api.get('/read/:date', method.readByDate);
    return api;
};

module.exports = router;