const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class House_Record extends Model {}

    House_Record.init({
        year: {
            type: DataTypes.INTEGER,
        },
        total_rent: {
            type: DataTypes.INTEGER,
        },
        rooms_rented: {
            type: DataTypes.INTEGER,
        },
        total_deposit: {
            type: DataTypes.INTEGER,
        },
        total_expense: {
            type: DataTypes.INTEGER,
        },
        total_profit: {
            type: DataTypes.INTEGER,
        },
        occupation_rate: {
            type: DataTypes.INTEGER,
        },
        total_entrances: {
            type: DataTypes.INTEGER,
        },
        tenant_renewal: {
            type: DataTypes.INTEGER,
        },
        total_leaving_tenants: {
            type: DataTypes.INTEGER,
        },
        total_maintenance: {
            type: DataTypes.INTEGER,
        },
        date_published: {
            type: DataTypes.DATEONLY,
        },
        delete_reason: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'House_Record',
        timestamps: true,
        paranoid: true
    });
    
    // House_Record.sync({force: true});
    House_Record.sync();

    return House_Record;
}
