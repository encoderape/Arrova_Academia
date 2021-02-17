const method = require('../../controllers/aboutController.js');

const router = express => {
    const api = express.Router();
    api.post('/create', method.create);
    api.get('/read', method.read);
    api.put('/update/:id', method.update);
    api.delete('/delete/:id', method.delete);
    return api;
};

module.exports = router;
