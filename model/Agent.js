const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class Admin extends Model {}

    Admin.init({
        first_name: {
            type: DataTypes.STRING,
        },
        last_name: {
            type: DataTypes.STRING,
        },
        other_names: {
            type: DataTypes.STRING,
        },
        date_of_birth: {
            type: DataTypes.DATEONLY,
        },
        cell_no: {
            type: DataTypes.STRING,
        },
        health_conditions: {
            type: DataTypes.STRING,
        },
        ID: {
            type: DataTypes.STRING,
        },
        passport: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.STRING,
        },
        tax_pin: {
            type: DataTypes.STRING,
        },
        delete_reason: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Admin',
        timestamps: true,
        paranoid: true
    });
    
    // Admin.sync({force: true});
    Admin.sync();

    return Admin;
}
