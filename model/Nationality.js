const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class Nationality extends Model {}

    Nationality.init({
        name: {
            type: DataTypes.STRING,
        },
        delete_reason: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Nationality',
        timestamps: true,
        paranoid: true
    });
    
    // Nationality.sync({force: true});
    Nationality.sync();

    return Nationality;
}
