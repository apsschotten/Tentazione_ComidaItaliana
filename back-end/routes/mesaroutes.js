const mesaController = require('../controllers/mesaControllers');
const router = require('express').Router();

router.post('/mesacadastrar', mesaController.cadastrar);

module.exports = router;