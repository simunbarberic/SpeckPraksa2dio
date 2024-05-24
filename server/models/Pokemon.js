const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Pokemon = sequelize.define("Pokemon", {
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 25]
            },
            unique: true
        },
        pokemonType:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 25]
            }
        },
        pokemonsecondtype:{
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [0, 25]
            }
        },
        numberofevolutions:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
        height:{
            type: DataTypes.STRING,
            allowNull: true
        },
        weight:{
            type: DataTypes.STRING,
            allowNull: true
        }

    }
    );

    return Pokemon
}