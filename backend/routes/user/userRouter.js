const method = require('../../controllers/userController.js');

const router = express => {
    const api = express.Router();
    api.post('/create', method.create);
    api.post('/login', method.login);
    api.post('/reset/:token', method.createNewPassword);
    api.get('/read', method.read);
    api.get('/read/:id', method.readById);
    api.get('/reset', method.resetPassword);
    api.put('/update/:id', method.update);
    api.delete('/delete/:id', method.delete);
    return api;
}

module.exports = router;
