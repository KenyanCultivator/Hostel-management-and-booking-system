const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class County extends Model {}

    County.init({
        name: {
            type: DataTypes.STRING,
        },
        delete_reason: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'County',
        timestamps: true,
        paranoid: true
    });
    
    // County.sync({force: true});
    County.sync();

    return County;
}
