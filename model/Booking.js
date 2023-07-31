const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class Booking extends Model {}
    
        Booking.init({
            state: {
                type: DataTypes.STRING,
            },
            confirmation: {
                type: DataTypes.STRING,
            },
            confirmation_date: {
                type: DataTypes.DATEONLY,
            },
            delete_reason: {
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            modelName: 'Booking',
            timestamps: true,
            paranoid: true
        });
        
        // Booking.sync({force: true});
        Booking.sync();
    
        return Booking;
    }
    