const method = require('../../controllers/newsController.js');

const router = express => {
    const api = express.Router();
    api.post('/create', method.create);
    api.get('/read', method.read);
    api.get('/read/:id', method.readById);
    api.put('/update/:id', method.updateById);
    api.delete('/delete/:id', method.deleteById);
    return api;
}

module.exports = router;
