const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class Tester extends Model {}

    Tester.init({
        firstname: {
            type: DataTypes.STRING,
            allownull: false
        },
        lastname: {
            type: DataTypes.STRING,
            unique: true,
            allownull: false
        }
    },
    {
        sequelize,
        modelName: 'Tester',
        timestamps: true,
        paranoid: true
    });
    
    Tester.sync();

    return Tester;
}
