const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class Comment extends Model {}

    Comment.init({
        comment: {
            type: DataTypes.STRING,
        },
        delete_reason: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Comment',
        timestamps: true,
        paranoid: true
    });
    
    // Comment.sync({force: true});
    Comment.sync();

    return Comment;
}
