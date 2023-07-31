const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class Role extends Model {}

    Role.init({
        role: {
            type: DataTypes.STRING,
        },
        delete_reason: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Role',
        timestamps: true,
        paranoid: true
    });
    
    // Role.sync({force: true});
    Role.sync();

    return Role;
}
