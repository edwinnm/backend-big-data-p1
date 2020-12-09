/*jshint esversion: 8 */

const vuelosCtrl = {};
const modelos = require('../models/Vuelo');


const neo4j = require('neo4j-driver')
const uri= 'bolt://localhost:7687'
const user = 'admin'
const password = 'admin';
const driver = neo4j.driver(uri, neo4j.auth.basic(user, password))
const session = driver.session()

vuelosCtrl.getMovies = async(req, res) => {   
    
    session
        .run('MATCH(n:Movie) RETURN n LIMIT 25')
        .then(function(result){
            var pelis = [];
            result.records.forEach(function(record){
                console.log(record._fields[0].properties);
                pelis.push(record._fields[0].properties);
            });
            res.json(pelis);
        })
        .catch( function(result){
            res.json({})
        })
           
};

vuelosCtrl.createMovie = async(req, res) => {
    var year = req.body.Year;
    var title = req.body.Title;
    session
        .run('CREATE(n:Movie {title:"'+ title+'", year:'+year+'}) RETURN n')
        .then(function(result){
            //console.log(result);
            res.json({ message: "Pelicula creada", peli: result });            
            //session.close();
//          res.json(pelis);
        })
        .catch( function(err){
            console.log(err);
        })    
};

vuelosCtrl.getMovie = async(req, res) => {

    //MATCH (movie:Movie) WHERE (movie.title= "La pelicula" ) RETURN movie.title
    var title = req.body.Title;
    if(req.body.Id){
        
        session
        .run('MATCH (movie:Movie) WHERE ID(movie) = '+ req.body.Id+' RETURN movie')
        .then(function(result){
            var pelis = [];
                result.records.forEach(function(record){
                    //console.log(record._fields[0].properties);
                    pelis.push(record._fields[0].properties);
                });
                res.json(pelis);
        })
        .catch( function(err){
            console.log(err);
        }) 
    }else{
        session
        .run('MATCH (movie:Movie) WHERE (movie.title = "'+ title+'") RETURN movie')
        .then(function(result){
            var pelis = [];
                result.records.forEach(function(record){
                    //console.log(record._fields[0].properties);
                    pelis.push(record._fields[0].properties);
                });
                res.json(pelis);
        })
        .catch( function(err){
            console.log(err);
        }) 
    }

    
};
//MATCH (movie:Movie) WHERE ID(movie) = 179 RETURN movie

vuelosCtrl.updateVuelo = async(req, res) => {
    const Vuelo = modelos[`c${ req.params.year.substring(2,4) }`];
    await Vuelo.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Vuelo actualizado" });
};


vuelosCtrl.deleteMovie = async(req, res) => {
    session
    .run('MATCH (n) where id(n) = '+ req.params.id +' DETACH DELETE n')
    .then(function(result){
        //console.log(result);
        res.json({ message: "Pelicula eliminada", peli: result });            
        //session.close();
//          res.json(pelis);
    })
    .catch( function(err){
        console.log(err);
    })    
    //MATCH (n) where id(n) = 179 DETACH DELETE n

};


module.exports = vuelosCtrl;