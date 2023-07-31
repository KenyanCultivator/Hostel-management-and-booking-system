const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class Student extends Model {}

    Student.init({
        registration_no: {
            type: DataTypes.STRING,
        },
        study_year: {
            type: DataTypes.DATEONLY,
        },
        semester: {
            type: DataTypes.STRING,
        },
        delete_reason: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Student',
        timestamps: true,
        paranoid: true
    });
    
    // Student.sync({force: true});
    Student.sync();

    return Student;
}
