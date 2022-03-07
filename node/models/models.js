//Tenemos que definir 1 modelo porque solo hay una entidad.

//Se tiene que definir tantos modelos como entidades existan + sus relaciones n a n. (En algunos casos).


const {Sequelize, DataTypes} = require ('sequelize');
const {database} = require('../database/db');

//console.log(database);

// generar una instancia del modelo.

const ModeloPelícula = database.define('Película',{
  title: {type: DataTypes.STRING},
  content: {type: DataTypes.STRING}
})

//console.log(ModeloPelícula);
//console.log(typeof(ModeloPelícula));


module.exports.ModeloPelícula = ModeloPelícula;


/*
En sql :
create table database.tabla(
  name varchar...
)
*/