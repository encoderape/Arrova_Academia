const method = require('../../controllers/contactController.js');

const router = express => {
    const api = express.Router();
    api.post('/create', method.create);
    return api;
};

module.exports = router;
