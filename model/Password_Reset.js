const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class Password_Reset extends Model {}

    Password_Reset.init({
        email: {
            type: DataTypes.STRING,
            unique: true,
            allownull: false
        },
        Token: {
            type: DataTypes.STRING,
            allownull: false
        }
    },
    {
        sequelize,
        modelName: 'Password_Reset',
        timestamps: true,
        paranoid: true
    });
    
    // Password_Reset.sync({force: true});
    Password_Reset.sync();

    return Password_Reset;
}
