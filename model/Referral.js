const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class Referral extends Model {}

    Referral.init({
        delete_reason: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Referral',
        timestamps: true,
        paranoid: true
    });
    
    // Referral.sync({force: true});
    Referral.sync();

    return Referral;
}
