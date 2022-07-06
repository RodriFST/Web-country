const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('activity', {
        
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true

        },
        difficulty: {
            type: DataTypes.ENUM("1", "2", "3", "4", "5")
        },
        duration: {
            type: DataTypes.STRING
        },
        season: {
            type: DataTypes.ENUM('spring', 'summer', 'autumn', 'winter')
        }

    },
        {
            timestamps: false,
        });
};