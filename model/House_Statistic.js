const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class House_Statistic extends Model {}

    House_Statistic.init({
        likes: {
            type: DataTypes.INTEGER,
        },
        new_visitors: {
            type: DataTypes.INTEGER,
        },
        returning_visitors: {
            type: DataTypes.INTEGER,
        },
        shares: {
            type: DataTypes.INTEGER,
        },
        referrals: {
            type: DataTypes.INTEGER,
        },
        conversion_rate: {
            type: DataTypes.INTEGER,
        },
        Entrance_rate: {
            type: DataTypes.INTEGER,
        },
        leaving_rate: {
            type: DataTypes.INTEGER,
        },
        delete_reason: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'House_Statistic',
        timestamps: true,
        paranoid: true
    });
    
    // House_Statistic.sync({force: true});
    House_Statistic.sync();

    return House_Statistic;
}
