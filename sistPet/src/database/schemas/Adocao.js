const {db,Sequelize} = require('../connection')
const Visita = require('./Visita')
const Funcionario = require('./Funcionario')
const Pet = require('./Pet')
const Adotante = require('./Adotante')

const Adocao = db.define('adocao',{
    nomeAdotante:{
        type: Sequelize.STRING,
        allowNull: false
    },
    nomePet:{
        type: Sequelize.STRING,
        allowNull: false
    },
    statusAdocao:{
        type: Sequelize.STRING,
        allowNull: false
    },
    data:{
        type: Sequelize.STRING,
        allowNull: false
    },
    nomeFuncionario:{
        type: Sequelize.STRING,
        allowNull: false
    },
})

Adocao.belongsTo(Adotante,{
    constraint:true,
    foreignKey:'id_Adotante',
})

Adocao.belongsTo(Visita,{
    constraint:true,
    foreignKey:'id_Visita',
})

Adocao.belongsTo(Funcionario,{
    constraint:true,
    foreignKey:'id_Funcionario',
})

Adocao.belongsTo(Pet,{
    constraint:true,
    foreignKey:'id_Pet',
})


module.exports = Adocao