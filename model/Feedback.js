const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class Feedback extends Model {}

    Feedback.init({
        feedback: {
            type: DataTypes.STRING,
        },
        delete_reason: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Feedback',
        timestamps: true,
        paranoid: true
    });
    
    // Feedback.sync({force: true});
    Feedback.sync();

    return Feedback;
}
