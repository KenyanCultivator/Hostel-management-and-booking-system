const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class Room extends Model {}

    Room.init({
        room_number: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.STRING,
        },
        room_contents: {
            type: DataTypes.STRING,
        },
        rating: {
            type: DataTypes.INTEGER,
        },
        date_occupied: {
            type: DataTypes.DATEONLY,
        },
        delete_reason: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Room',
        timestamps: true,
        paranoid: true
    });
    
    // Room.sync({force: true});
    Room.sync();

    return Room;
}
