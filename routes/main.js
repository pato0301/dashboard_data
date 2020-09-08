const express = require('express');
const router = express.Router();

// Controllers
const mainController = require('../controllers/mainController');

// Rutas
router.get('/', mainController.root);


// Export
module.exports = router;