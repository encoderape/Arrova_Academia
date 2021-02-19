const method = require('../../controllers/logsController.js');

const router = express => {
    const api = express.Router();
    api.post('/create', method.create);
    return api;
}

module.exports = router;
