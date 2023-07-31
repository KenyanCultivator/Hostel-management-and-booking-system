const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class House extends Model {}

    House.init({
        name: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        total_rooms: {
            type: DataTypes.INTEGER,
        },
        total_rent: {
            type: DataTypes.INTEGER,
        },
        total_deposit: {
            type: DataTypes.INTEGER,
        },
        status: {
            type: DataTypes.STRING,
        },
        payment_method: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.INTEGER,
        },
        features: {
            type: DataTypes.STRING,
        },
        rating: {
            type: DataTypes.STRING,
        },
        confirmation: {
            type: DataTypes.INTEGER,
        },
        total_houses: {
            type: DataTypes.INTEGER,
        },
        delete_reason: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'House',
        timestamps: true,
        paranoid: true
    });
    
    // House.sync({force: true});
    House.sync();

    return House;
}
