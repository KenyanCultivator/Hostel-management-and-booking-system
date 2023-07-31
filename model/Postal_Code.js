const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class Postal_Code extends Model {}

    Postal_Code.init({
        adress: {
            type: DataTypes.STRING,
        },
        code: {
            type: DataTypes.STRING,
        },
        delete_reason: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Postal_Code',
        timestamps: true,
        paranoid: true
    });
    
    // Postal_Code.sync({force: true});
    Postal_Code.sync();

    return Postal_Code;
}
