const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class Tenant extends Model {}

    Tenant.init({
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
        national_id: {
            type: DataTypes.STRING,
        },
        passport: {
            type: DataTypes.STRING,
        },
        tax_pin: {
            type: DataTypes.STRING,
        },
        occupation: {
            type: DataTypes.STRING,
        },
        rating: {
            type: DataTypes.INTEGER,
        },
        status: {
            type: DataTypes.STRING,
        },
        Total_evictions: {
            type: DataTypes.INTEGER,
        },
        date_in: {
            type: DataTypes.DATEONLY,
        },
        date_out: {
            type: DataTypes.DATEONLY,
        },
        delete_reason: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Tenant',
        timestamps: true,
        paranoid: true
    });
    
    // Tenant.sync({force: true});
    Tenant.sync();

    return Tenant;
}
