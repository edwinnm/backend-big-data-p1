/*jshint esversion: 6 */
const { Router } = require('express');
const vuelosCtrl = require('../controllers/vuelos.controller');
const router = Router();


router.get('/:year', vuelosCtrl.getVuelos);
router.post('/', vuelosCtrl.createVuelo);
router.get('/limit/:year', vuelosCtrl.getVuelo);
router.put('/:year/:id', vuelosCtrl.updateVuelo);
router.delete('/:year/:id', vuelosCtrl.deleteVuelo);



module.exports = router;