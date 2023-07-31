const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class Maintenance extends Model {}

    Maintenance.init({
        type: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        worker_name: {
            type: DataTypes.STRING,
        },
        amount: {
            type: DataTypes.INTEGER,
        },
        delete_reason: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Maintenance',
        timestamps: true,
        paranoid: true
    });
    
    // Maintenance.sync({force: true});
    Maintenance.sync();

    return Maintenance;
}
