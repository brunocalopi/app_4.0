const { Sequelize } = require("sequelize");

const database = new Sequelize('películas','root','Brunomysql123',{
  host:'localhost',
  dialect: 'mysql'
});

module.exports.database = database;

/*try{
  database.authenticate();
  console.log("Conectado");

}catch(error){
  console.log("Algo está mal, revisemos")

}*/