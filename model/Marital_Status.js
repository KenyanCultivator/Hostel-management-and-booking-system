const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class Marital_Status extends Model {}

    Marital_Status.init({
        Status: {
            type: DataTypes.STRING,
        },
        delete_reason: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Marital_Status',
        timestamps: true,
        paranoid: true
    });
    
    // Marital_Status.sync({force: true});
    Marital_Status.sync();

    return Marital_Status;
}
