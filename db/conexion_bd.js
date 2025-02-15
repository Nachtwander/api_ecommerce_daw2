const {Sequelize} =require('sequelize')

const sequelize = new Sequelize(
    //nombre de la base de datos
    'ecommerce',
    //usuario
    'root',
    //clave
    'admin123',
    {
        host:'localhost',
        port:3306,
        //tipo de base de datos
        dialect:'mysql'
    }
)

sequelize.authenticate()
    .then(()=>console.log('Conexion establecida Correctamente'))
    .catch(err=> console.log("Error en la conexion" + err))

module.exports= sequelize