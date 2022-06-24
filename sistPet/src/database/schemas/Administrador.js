const {db,Sequelize} = require('../connection')

const Administrador = db.define('administrador',{
    login:{
        type: Sequelize.STRING,
        allowNull: false
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = Administrador