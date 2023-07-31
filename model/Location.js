const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class Location extends Model {}

    Location.init({
        name: {
            type: DataTypes.STRING,
        },
        delete_reason: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Location',
        timestamps: true,
        paranoid: true
    });
    
    // Location.sync({force: true});
    Location.sync();

    return Location;
}
