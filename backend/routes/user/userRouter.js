const method = require('../../controllers/userController.js');

const router = express => {
    const api = express.Router();
    api.post('/create', method.create);
    api.post('/login', method.login);
    api.get('/read', method.read);
    api.get('/read/:id', method.readById);
    api.put('/update/:id', method.update);
    api.delete('/delete/:id', method.delete);
    return api;
}

module.exports = router;
