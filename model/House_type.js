const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class House_Type extends Model {}

    House_Type.init({
        name: {
            type: DataTypes.STRING,
        },
        delete_reason: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'House_Type',
        timestamps: true,
        paranoid: true
    });
    
    // House_Type.sync({force: true});
    House_Type.sync();

    return House_Type;
}
