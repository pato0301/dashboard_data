const express = require('express');
const router = express.Router();

// Middlewares
const loginMiddleware = require('../middlewares/loginMiddleware')

// Controllers
const mainController = require('../controllers/mainController');

// Rutas
router.get('/', loginMiddleware,mainController.root);
router.get('/login', mainController.login);
router.post('/login', mainController.checkLogin);
router.get('/register', mainController.register);
router.post('/register', mainController.saveNewUser);


// Export
module.exports = router;