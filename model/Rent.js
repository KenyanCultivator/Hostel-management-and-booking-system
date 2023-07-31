const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class Rent extends Model {}

    Rent.init({
        amount: {
            type: DataTypes.INTEGER,
        },
        date: {
            type: DataTypes.DATEONLY,
        },
        target_period: {
            type: DataTypes.DATE,
        },
        status: {
            type: DataTypes.STRING,
        },
        confirmation: {
            type: DataTypes.STRING,
        },
        next_date: {
            type: DataTypes.DATEONLY,
        },
        delete_reason: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Rent',
        timestamps: true,
        paranoid: true
    });
    
    // Rent.sync({force: true});
    Rent.sync();

    return Rent;
}
