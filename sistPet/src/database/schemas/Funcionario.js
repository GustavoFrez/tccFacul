const {db,Sequelize} = require('../connection')

const Funcionario = db.define('funcionario',{
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
        type: Sequelize.STRING,
    },
    sexo:{
        type: Sequelize.STRING,
    },
    cpf:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = Funcionario