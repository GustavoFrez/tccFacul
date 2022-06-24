const {db,Sequelize} = require('../connection')
const Adotante = require('./Adotante')


const Visita = db.define('visita',{
    horario:{
        type: Sequelize.STRING,
        allowNull: false
    },
    dia:{
        type: Sequelize.STRING,
        allowNull: false
    },
    nomeAdotante:{
        type: Sequelize.STRING,
        allowNull: false
    },
    cpfAdotante:{
        type: Sequelize.STRING,
        allowNull: false
    },
})

Visita.belongsTo(Adotante,{
    constraint:true,
    foreignKey:'id_Adotante',
})


module.exports = Visita