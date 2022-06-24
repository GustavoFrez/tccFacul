const {db,Sequelize} = require('../connection')

const Pet = db.define('pet',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    pelagem:{
        type: Sequelize.STRING,
        allowNull: false
    },
    sexo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    porte:{
        type: Sequelize.STRING,
        allowNull: false
    },
    comportamento:{
        type: Sequelize.STRING,
        allowNull: false  
    },
    raca:{
        type: Sequelize.STRING,
        allowNull: false
    },
    idade:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    foto:{
        type: Sequelize.TEXT,
    },
    vacinado:{
        type: Sequelize.STRING,
        allowNull: false
    },
    status:{
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = Pet