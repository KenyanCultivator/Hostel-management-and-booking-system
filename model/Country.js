const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class Country extends Model {}

    Country.init({
        name: {
            type: DataTypes.STRING,
        },
        delete_reason: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Country',
        timestamps: true,
        paranoid: true
    });
    
    // Country.sync({force: true});
    Country.sync();

    return Country;
}
