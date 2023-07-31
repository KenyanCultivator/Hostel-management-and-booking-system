const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class User extends Model {}

    User.init({
        name: {
            type: DataTypes.STRING,
            allownull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allownull: false
        },
        password: {
            type: DataTypes.STRING,
            allownull: false
        },
        rememberToken: {
            type: DataTypes.STRING,
            allownull: false
        }
    },
    {
        sequelize,
        modelName: 'User',
        timestamps: true,
        paranoid: true
    });
    
    // User.sync({force: true});
    User.sync();

    return User;
}
