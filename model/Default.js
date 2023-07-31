const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class Default extends Model {}

    Default.init({
        reason: {
            type: DataTypes.STRING,
        },
        delete_reason: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Default',
        timestamps: true,
        paranoid: true
    });
    
    // Default.sync({force: true});
    Default.sync();

    return Default;
}
