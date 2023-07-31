const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class Region extends Model {}

    Region.init({
        name: {
            type: DataTypes.STRING,
        },
        delete_reason: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Region',
        timestamps: true,
        paranoid: true
    });
    
    // Region.sync({force: true});
    Region.sync();

    return Region;
}
