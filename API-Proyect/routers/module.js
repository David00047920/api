const ModuleController = require('../controllers/module')
const express = require('express');
const router = express.Router();

router.post('/', ModuleController.addModule); //id de usuario
router.get('/:id', ModuleController.getUserModule); // id user
router.put('/', ModuleController.updateModule); //id de modulo
router.delete('/', ModuleController.deleteModule); //id de modulo

module.exports = router;
