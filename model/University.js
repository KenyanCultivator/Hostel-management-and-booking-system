const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class University extends Model {}

    University.init({
        name: {
            type: DataTypes.STRING,
        },
        branch: {
            type: DataTypes.STRING,
        },
        delete_reason: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'University',
        timestamps: true,
        paranoid: true
    });
    
    // University.sync({force: true});
    University.sync();

    return University;
}
