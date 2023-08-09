const express = require('express');
const { Joi } = require('express-validation');
const { ExceptionChecker } = require('../../error');
const { UserModel } = require('../../model');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const store = (req, res, next) => {
    try {
        const saltRounds = 10;
        const { email, name, password } = req.body;
        bcrypt.hash(password, saltRounds, async function(err, password) {
            await UserModel.create({
                email, name, password
            });
        });

    } catch ({ message }) {
        return next(ExceptionChecker.ExceptionChecker(message));
    }
}

module.exports = {
    store
}