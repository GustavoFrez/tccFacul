const {db,Sequelize} = require('../connection')
const Adotante = require('./Adotante')
const Funcionario = require('./Funcionario')
const Administrador = require('./Administrador')

const PasswordToken = db.define('passwordtoken',{
    token:{
        type: Sequelize.STRING,
        allowNull: false
    },
    used:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
})


PasswordToken.belongsTo(Adotante,{
    constraint:true,
    foreignKey:'id_Adotante',
})

PasswordToken.belongsTo(Funcionario,{
    constraint:true,
    foreignKey:'id_Funcionario'
})

PasswordToken.belongsTo(Administrador,{
    constraint:true,
    foreignKey:'id_Administrador'
})

module.exports = PasswordToken