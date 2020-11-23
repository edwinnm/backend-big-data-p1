/*jshint esversion: 6 */
const { Router } = require('express');
const vuelosCtrl = require('../controllers/vuelos.controller');
const router = Router();


router.get('/', vuelosCtrl.getVuelos);
router.post('/', vuelosCtrl.createVuelo);
router.get('/limit', vuelosCtrl.getVuelo);
router.put('/:id', vuelosCtrl.updateVuelo);
router.delete('/:id', vuelosCtrl.deleteVuelo);



module.exports = router;