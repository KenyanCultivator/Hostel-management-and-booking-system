const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class House_type extends Model {}

    House_type.init({
        name: {
            type: DataTypes.STRING,
        },
        delete_reason: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'House_type',
        timestamps: true,
        paranoid: true
    });
    
    // House_type.sync({force: true});
    House_type.sync();

    return House_type;
}
