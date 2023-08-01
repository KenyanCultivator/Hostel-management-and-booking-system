const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class Tester extends Model {}

    Tester.init({
        firstname: {
            type: DataTypes.STRING,
            allownull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
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
