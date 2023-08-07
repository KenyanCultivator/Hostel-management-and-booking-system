const express = require('express');
const { Joi } = require('express-validation');
const { StatusCodesError, ExceptionChecker } = require('../../error');
const { UserModel } = require('../../model');
const jwt = require('jsonwebtoken')

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const store = async (req, res, next) => {
    try {
        const { email, name, password } = req.body;
        const user = await UserModel.create({
            email, name, password
        });
        
        res.send(user);

    } catch ({ name }) {
        return next(ExceptionChecker.ExceptionChecker(name));
    }
};

module.exports = {
    store
}