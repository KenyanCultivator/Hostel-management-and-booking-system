const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class Company extends Model {}

    Company.init({
        name: {
            type: DataTypes.STRING,
        },
        purpose: {
            type: DataTypes.STRING,
        },
        cell: {
            type: DataTypes.STRING,
        },
        paybill: {
            type: DataTypes.STRING,
        },
        account: {
            type: DataTypes.STRING,
        },
        delete_reason: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Company',
        timestamps: true,
        paranoid: true
    });
    
    // Company.sync({force: true});
    Company.sync();

    return Company;
}
