/*jshint esversion: 8 */

const vuelosCtrl = {};
const modelos = require('../models/Vuelo');

vuelosCtrl.getVuelos = async(req, res) => {
    const Vuelo = modelos[`c${ req.params.year.substring(2,4) }`];
    const vuelos = await Vuelo.find({}).limit(30);
    res.json(vuelos);
};

vuelosCtrl.createVuelo = async(req, res) => {
    let Vuelo = modelos[`c${ req.body.Year.substring(2,4) }`];
    console.log(Vuelo)
    const newVuelo = new Vuelo(req.body);
    await newVuelo.save();
    res.json({ message: "Vuelo creado", vuelo: newVuelo });

};

vuelosCtrl.getVuelo = async(req, res) => {
    const Vuelo = modelos[`c${ req.params.year.substring(2,4) }`];
    const vuelo = await Vuelo.find(req.body).limit(30);
    res.json(vuelo);
};

vuelosCtrl.updateVuelo = async(req, res) => {
    const Vuelo = modelos[`c${ req.params.year.substring(2,4) }`];
    await Vuelo.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Vuelo actualizado" });
};


vuelosCtrl.deleteVuelo = async(req, res) => {
    const Vuelo = modelos[`c${ req.params.year.substring(2,4) }`];
    await Vuelo.findByIdAndDelete(req.params.id);
    res.json({ message: "Vuelo eliminado" });
};


module.exports = vuelosCtrl;