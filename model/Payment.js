const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class Payment extends Model {}

    Payment.init({
        method: {
            type: DataTypes.STRING,
        },
        amount: {
            type: DataTypes.INTEGER,
        },
        purpose: {
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
        modelName: 'Payment',
        timestamps: true,
        paranoid: true
    });
    
    // Payment.sync({force: true});
    Payment.sync();

    return Payment;
}
