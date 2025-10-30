const userController = require('../controllers/reservasControllers');
const router = require('express').Router();


router.post('/reserva', userController.cadastrar);


module.exports = router;