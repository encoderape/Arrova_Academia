const method = require('../../controllers/userController.js');
const isUserAuth = require('../../middlewares/user-auth.js');

const router = express => {
    const api = express.Router();
    api.post('/create', method.create);
    api.post('/login', method.login);
    api.post('/reset/:token', isUserAuth, method.createNewPassword);
    api.get('/read', method.read);
    api.get('/read/:id', isUserAuth, method.readById);
    api.get('/reset', isUserAuth, method.resetPassword);
    api.put('/update/:id', isUserAuth, method.update);
    api.delete('/delete/:id', method.delete);
    return api;
}

module.exports = router;
