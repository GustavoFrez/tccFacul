const kenx = require('knex')({
    client:'mysql2',
    connection:{
        host:'localhost',
        user:'root',
        password:'root',
        database:'sistpet',
    }
});

//SEQUELIZE
const Sequelize = require('sequelize')

const Connection = new Sequelize('sistpet','root','root',{
    host:'localhost',
    dialect:'mysql',
    define: {
        timestamps: false,
        freezeTableName: true
    }
})

Connection.authenticate().then(()=>{console.log('Conexão com o banco estabelicida')})
.catch(err => {console.log(`Erro ao se conectar com banco: \n ${err}`)})

module.exports ={
    database : kenx,
    db : Connection,
    Sequelize : Sequelize,
}
