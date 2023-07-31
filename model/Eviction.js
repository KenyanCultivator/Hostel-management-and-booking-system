const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class Eviction extends Model {}

    Eviction.init({
        reason: {
            type: DataTypes.STRING,
        },
        delete_reason: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Eviction',
        timestamps: true,
        paranoid: true
    });
    
    // Eviction.sync({force: true});
    Eviction.sync();

    return Eviction;
}
