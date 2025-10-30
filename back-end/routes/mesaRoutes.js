const mesaController = require('../controllers/mesaControllers');
const router = require('express').Router();

router.post('/mesacadastrar', mesaController.mesaCadastrar);

module.exports = router; 