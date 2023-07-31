const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    class Employee extends Model {}

    Employee.init({
        role: {
            type: DataTypes.STRING,
        },
        delete_reason: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Employee',
        timestamps: true,
        paranoid: true
    });
    
    // Employee.sync({force: true});
    Employee.sync();

    return Employee;
}
