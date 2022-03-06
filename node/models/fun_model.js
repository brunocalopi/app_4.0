const {ModeloPelícula} = require('./models');

//La función para mostrar todas las instancias
//select*from table

const getAllMovies = async(req,res)=>{
  try{
    const Películas = await ModeloPelícula.findAll();
    res.json(Películas);
  } catch(error){
    res.json({message: 'No se encontraron instancias'})
  }
}

//La función para mostrar solo 1 instancia
//sql : select*from table where id_película = 1;

const getOneMovie = async(req,res)=>{
  try{
    const Película_unica = await ModeloPelícula.findAll({where: {id: req.params.id}});
  } catch(error){
    res.json({mensaje: "No se encontró la instancia"})
  }
}


//La función para crear un registro
//sql: insert into table ...{'300',...}

const createOneMovie = async(req,res)=>{
  try{
    await ModeloPelícula.create(req.body);
    res.json({message: "Registro creado satisfactoriamente"});
  }catch(error){
    res.json({mesage: "No se ha realizado ningún registro"});
  }
}

//La función para actualizar un registro

<<<<<<< HEAD
<<<<<<< HEAD
//La función para eliminar un registro (=> ModeloPelícula)
=======
=======
>>>>>>> master
const updateOneMovie = async(req,res)=>{
  try{
    await ModeloPelícula.update(req.body({
      where: {id: req.params.id}
    }));
    res.json({message: "Registro actualizado"});
  }catch(error){
    res.json({message: "No se ha podido actualizar el registro"})
  }
}

//La función para eliminar un registro (=> ModeloPelícula)

const deleteOneMovie = async(req,res)=>{
  try{
    await ModeloPelícula.destroy({
      where: {id: req.params.id}
    });
    res.json({message: "Eliminado correctamente"});
  }catch(error){
    res.json({message: "No se pudo eliminar"})
  }
}

<<<<<<< HEAD
module.exports = {getAllMovies,getOneMovie,createOneMovie,updateOneMovie, deleteOneMovie}
>>>>>>> 072d5ca (actualización)
=======
module.exports = {getAllMovies,getOneMovie,createOneMovie,updateOneMovie, deleteOneMovie}
>>>>>>> master
