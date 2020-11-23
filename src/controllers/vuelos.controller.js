/*jshint esversion: 6 */

const vuelosCtrl = {};
const Vuelo = require('../models/Vuelo');

vuelosCtrl.getVuelos = async (req, res) => {
    const vuelos = await Vuelo.find();
    res.json(vuelos);
};
vuelosCtrl.createVuelo = async (req, res) => {
    const newVuelo = new Vuelo(req.body);
    console.log(newVuelo);
    await newVuelo.save();
    res.json({message: "Vuelo creado", vuelo: newVuelo});

};
vuelosCtrl.getVuelo = async (req, res) => {
    const vuelo = await Vuelo.findById( req.params.id)
    res.json(vuelo);
};
vuelosCtrl.updateVuelo = async (req, res) => {
    await Vuelo.findByIdAndUpdate(req.params.id, req.body)
    res.json({message : "Vuelo actualizado"});
};


vuelosCtrl.deleteVuelo = async (req, res) => {
    await Vuelo.findByIdAndDelete(req.params.id)
    res.json({message : "Vuelo eliminado"});
};


module.exports = vuelosCtrl;