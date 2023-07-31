const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class Gender extends Model {}

    Gender.init({
        name: {
            type: DataTypes.STRING,
        },
        delete_reason: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Gender',
        timestamps: true,
        paranoid: true
    });
    
    // Gender.sync({force: true});
    Gender.sync();

    return Gender;
}
