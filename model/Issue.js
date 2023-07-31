const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class Issue extends Model {}

    Issue.init({
        type: {
            type: DataTypes.STRING,
        },
        details: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.STRING,
        },
        resolution: {
            type: DataTypes.STRING,
        },
        resolution_date: {
            type: DataTypes.DATEONLY,
        },
        confirmation: {
            type: DataTypes.STRING,
        },
        confirmation_date: {
            type: DataTypes.DATEONLY,
        },
        delete_reason: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Issue',
        timestamps: true,
        paranoid: true
    });
    
    // Issue.sync({force: true});
    Issue.sync();

    return Issue;
}
