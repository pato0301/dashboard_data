const express = require('express');
const router = express.Router();

// Controllers
const mainController = require('../controllers/mainController');

// Rutas
router.get('/', mainController.root);
router.get('/login', mainController.login);
router.post('/login', mainController.checkLogin);


// Export
module.exports = router;