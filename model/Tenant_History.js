const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class Tenant_History extends Model {}

    Tenant_History.init({
        name: {
            type: DataTypes.STRING,
        },
        delete_reason: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Tenant_History',
        timestamps: true,
        paranoid: true
    });
    
    // Tenant_History.sync({force: true});
    Tenant_History.sync();

    return Tenant_History;
}
