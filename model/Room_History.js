const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class Room_History extends Model {}

    Room_History.init({
        name: {
            type: DataTypes.STRING,
        },
        delete_reason: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Room_History',
        timestamps: true,
        paranoid: true
    });
    
    // Room_History.sync({force: true});
    Room_History.sync();

    return Room_History;
}
