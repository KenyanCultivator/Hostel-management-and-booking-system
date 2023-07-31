const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class Storage extends Model {}

    Storage.init({
        item: {
            type: DataTypes.STRING,
        },
        delete_reason: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Storage',
        timestamps: true,
        paranoid: true
    });
    
    // Storage.sync({force: true});
    Storage.sync();

    return Storage;
}
