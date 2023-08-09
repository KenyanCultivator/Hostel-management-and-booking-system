
const express = require('express');const { Joi } = require('express-validation');
const { UserModel } = require('../../model');
const jwt = require('jsonwebtoken');
const { ExceptionChecker } = require('../../error');
const config = require('../../config/config');
const { cookies } = require('next/dist/client/components/headers');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const login = async (req, res, next) => {
    try {
        res.send(req.body);
        const users = await UserModel.findOne(req.body)

    } catch ({message}) {
        return next(ExceptionChecker.ExceptionChecker(message))
    }
};

module.exports = {
    login
}