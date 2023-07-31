const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class Deposit extends Model {}

    Deposit.init({
        amount_paid: {
            type: DataTypes.INTEGER,
        },
        deductions: {
            type: DataTypes.INTEGER,
        },
        remainder: {
            type: DataTypes.INTEGER,
        },
        status: {
            type: DataTypes.STRING,
        },
        confirmation: {
            type: DataTypes.STRING,
        },
        delete_reason: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Deposit',
        timestamps: true,
        paranoid: true
    });
    
    // Deposit.sync({force: true});
    Deposit.sync();

    return Deposit;
}
