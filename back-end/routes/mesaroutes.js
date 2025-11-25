const mesaController = require('../controllers/mesaController');
const router = require('express').Router();

router.post('/mesacadastrar', mesaController.criar)

module.exports = router;