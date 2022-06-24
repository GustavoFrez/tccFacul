const {db,Sequelize} = require('../connection')

const Adotante = db.define('adotante',{
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
    endereco:{
        type: Sequelize.STRING,
    },
    dataDeNascimento:{
        type: Sequelize.STRING,  
    },
    tel:{
        type: Sequelize.BIGINT,
    },
    sexo:{
        type: Sequelize.STRING,
    },
    cpf:{
        type: Sequelize.STRING,
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = Adotante